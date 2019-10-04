export const queries = {
    login: `{
        login(input: 
          {
          email:"head.trainer@successive.tech"
          password:"trainer@123"
        })
        {
          message
          data
          status
        }
    }`
}