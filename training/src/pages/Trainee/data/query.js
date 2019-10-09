export const query = {
    traineeList: `{
        getTrainee{
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
  }`
}