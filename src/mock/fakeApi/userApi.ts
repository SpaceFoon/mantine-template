import {Server, Response} from 'miragejs'

export default function userApi(server: Server, apiPrefix: string) {
  server.post(`${apiPrefix}/users/add`, (schema, {requestBody}) => {
    console.log('requestBody', requestBody, schema)
    return true;
    // const user = schema.db.signInUserData.findBy({
    //   email,
    //   password,
    // })
    // console.log('user', user)
    // if (user) {
    //   return user
    // }
    // return new Response(
    //   401,
    //   {some: 'header'},
    //   {message: 'Invalid email or password!'}
    // )
  })

  server.post(`${apiPrefix}/delete`, () => {
    return true
  })
}
