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
    }`
}