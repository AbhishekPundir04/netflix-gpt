import React from 'react'

const checkValidateData = (email,password,name) => {
 const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
const isPasswordValid = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)
const fullName = /^[A-Za-z\s]+$/.test(name);
if(!isEmailValid) return "Email ID is not valid"
if(!isPasswordValid) return "Password is not valid"
if(!fullName) return "Name is not valid"


return null

}

export default checkValidateData;