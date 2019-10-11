import gql from 'graphql-tag'
export const query = {
    traineeList:gql `query getTrainee($skip: Int, $limit: Int){
        getTrainee(skip: $skip, limit: $limit){
          message
          status
          data{
            count
            records{
              name
              originalID
            }
          }
        }
    }`,
    login: gql `query login($email: String!, $password: String!){
      login(input: {
          email: $email,
          password: $password
      }){
          message
          data
      }
    }`,
    me: gql `
      {
        me{
        data{
          name
          createdBy {
            name
          }
        }
        message
        status
      }
    }`,
    addTrainee: gql `mutation createTrainee($name: String, $password: String, $email: String){
      createTrainee(input: {
      email: $email
        name: $name
        password: $password
      }) {
        data{
          name
        }
        message
        status
      }
    }`,
  deleteTrainee: gql `mutation deleteTrainee($id: String!){
    deleteTrainee(id: $id){
      message
      status
      data{
        id
      }
    }
  }`
}