export const validate = (data: DataType) => {
   const error = {
      name: { message: '' },
      email: { message: '' },
      message: { message: '' }
   }
   const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
   let isError = false
   if (data.name.trim() === '') {
      error.name.message = 'Name required'
      isError = true
   }
   if (data.email.trim() === '') {
      error.email.message = 'Email required'
      isError = true
   } else if (!re.test(data.email)) {
      error.email.message = 'Invalid email address'
      isError = true
   }
   if (data.message.trim() === '') {
      error.message.message = 'Message required'
      isError = true
   }
   if (!isError) {
      return true
   }
   return error
}
type DataType = {
   name: string,
   email: string,
   message: string
}