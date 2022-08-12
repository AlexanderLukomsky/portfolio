export const formAPI = {
   _options: {
      headers: {
         'Content-type': 'application/json'
      },
      method: 'POST',
   },
   sendForm(data: FormDataType) {
      return fetch('https://api.emailjs.com/api/v1.0/email/send',
         {
            ...this._options, body: JSON.stringify({
               user_id: process.env.REACT_APP_USER_ID,
               service_id: process.env.REACT_APP_SERVICE_ID,
               template_id: process.env.REACT_APP_TEMPLATE_ID,
               template_params: data
            })
         }
      )
   }

}
export type FormDataType = {
   message: string
   email: string
   name: string
}