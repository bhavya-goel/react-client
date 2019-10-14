import React from "react";
import { Redirect } from "react-router-dom";
import { Mutation } from "react-apollo";
import { query } from "./data/query";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

class DeleteTrainee extends React.Component {
  mutationUpdate = (cache, { data }) => {
    const {
      deleteTrainee: {
        data: { id }
      }
    } = data;
    const traineelist = cache.readQuery({
      query: query.traineeList,
      variables: {
        skip: 0,
        limit: 10
      }
    });
    const { getTrainee } = traineelist;
    getTrainee.data.count -= 1;
    getTrainee.data.records = getTrainee.data.records.filter(
      obj => obj.originalID != id
    );
    cache.writeQuery({
      query: query.traineeList,
      variables: {
        skip: 0,
        limit: 10
      },
      data: traineelist
    });
  };
  render() {
    const {
      location: { state },
      history: { push }
    } = this.props;
    let id;
    if (state) id = state.id;
    else id = null;
    return (
      <>
        {!id ? (
          <Redirect to="/trainee/getTrainee" />
        ) : (
          <Mutation mutation={query.deleteTrainee} update={this.mutationUpdate}>
            {deleteTrainee => (
              <Dialog open={true}>
                <DialogTitle> Delete Trainee </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Do You Want To Delete This Trainee ?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={e => {
                      e.preventDefault();
                      deleteTrainee({
                        variables: { id }
                      })
                        .then(() => {
                          console.log("trainee deleted successfully");
                          push("/trainee/getTrainee");
                        })
                        .catch(err => {
                          console.log(err.message);
                          push("/trainee/getTrainee");
                        });
                    }}
                    autoFocus
                  >
                    Yes
                  </Button>
                  <Button
                    onClick={() => {
                      push("/trainee/getTrainee");
                    }}
                  >
                    No
                  </Button>
                </DialogActions>
              </Dialog>
            )}
          </Mutation>
        )}
      </>
    );
  }
}

export default DeleteTrainee;
