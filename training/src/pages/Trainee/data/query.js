export const query = {
    traineeList: `query getTrainee($skip: Int, $limit: Int){
        getTrainee(skip: $skip, limit: $limit){
          message
          status
          data{
            count
            records{
              name
            }
          }
        }
    }`,
    login: `query login($email: String!, $password: String!){
      login(input: {
          email: $email,
          password: $password
      }){
          message
          data
      }
    }`,
    me: `
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
    addTrainee: `mutation createTrainee($name: String, $password: String, $email: String){
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
      }`
}