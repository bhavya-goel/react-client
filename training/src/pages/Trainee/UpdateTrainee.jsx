import React from "react";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { query } from "./data/query";
import { ApolloConsumer } from "react-apollo";

class UpdateTrainee extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { state }
    } = props;
    if (state) {
      this.state = {
        buttonIsDisabled: false,
        name: {
          value: state.name,
          isChanged: false,
          error: ""
        },
        email: {
          value: state.email,
          isChanged: false,
          error: ""
        }
      };
    }
    this.FieldCheck = yup.object().shape({
      name: yup
        .string()
        .required("name is required")
        .min(3, "name too short"),
      email: yup
        .string()
        .required("email is required")
        .matches(/^[a-zA-Z0-9.]+@successive\.tech$/, "enter a valid email")
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      buttonIsDisabled: true,
      [name]: {
        value,
        isChanged: true,
        error: ""
      }
    });
  };
  validate = ({ target: { name, value } }) => {
    if (this.state[name].isChanged) {
      this.FieldCheck.validateAt(name, {
        [name]: value
      })
        .then(() => {
          this.finalCheck();
        })
        .catch(errorText => {
          errorText = errorText.errors[0];
          this.setState(
            previousState => ({
              [name]: {
                ...previousState[name],
                error: errorText
              }
            }),
            () => {
              this.finalCheck();
            }
          );
        });
    }
  };
  finalCheck = () => {
    const {
      name: { error: error1 },
      email: { error: error2 }
    } = this.state;
    if (!(error1.length || error2.length)) {
      this.setState({
        buttonIsDisabled: false
      });
    }
  };
  update = client => {
    const {
      location: {
        state: { id }
      }
    } = this.props;
    const { name, email } = this.state;
    client
      .mutate({
        variables: {
          id,
          name: name.value,
          email: email.value
        },
        update: cache => {
          const traineelist = cache.readQuery({
            query: query.traineeList,
            variables: {
              skip: 0,
              limit: 10
            }
          });
          const { getTrainee } = traineelist;
          getTrainee.data.records = getTrainee.data.records.map(obj => {
            if (obj.originalID == id) {
              obj.name = name.value;
              obj.email = email.value;
            }
            return obj;
          });
          cache.writeQuery({
            query: query.traineeList,
            variables: {
              skip: 0,
              limit: 10
            },
            data: traineelist
          });
        },
        mutation: query.updateTrainee
      })
      .then(() => {
        console.log("Trainee Updated");
        this.props.history.push("/trainee/getTrainee");
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  render() {
    const { props: {location: {state}}, state: {name, email, buttonIsDisabled} } = this
    return state ? (
      <ApolloConsumer>
        {client => (
          <form>
            <label>Name: </label>
            <TextField
              name="name"
              error={name.error.length ? true : false}
              helperText={
                name.error.length ? name.error : null
              }
              value={name.value}
              onBlur={this.validate}
              onChange={this.handleChange}
            />
            <br />
            <label>Email: </label>
            <TextField
              name="email"
              error={email.error.length ? true : false}
              helperText={
                email.error.length ? email.error : null
              }
              value={email.value}
              onBlur={this.validate}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <Button
              variant="contained"
              onClick={() => this.update(client)}
              disabled={buttonIsDisabled}
            >
              Update
            </Button>
          </form>
        )}
      </ApolloConsumer>
    ) : (
      <Redirect to="/trainee/getTrainee" />
    );
  }
}

export default UpdateTrainee;
