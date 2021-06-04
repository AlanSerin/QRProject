import { extend, localize } from "vee-validate";
// import { required, email, min } from "vee-validate/dist/rules";
import {
  required as rule_required,
  email as rule_email,
  min as rule_min,
  max as rule_max,
  confirmed as rule_confirmed,
  regex as rule_regex,
  between as rule_between,
  alpha as rule_alpha,
  integer as rule_integer,
  digits as rule_digits,
  length as rule_length,
} from 'vee-validate/dist/rules'


export const validatorPassword = password => {
  /* eslint-disable no-useless-escape */
  const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/
  /* eslint-enable no-useless-escape */
  const validPassword = regExp.test(password)
  return validPassword
}

export const validatorCreditCard = creditnum => {
  /* eslint-disable no-useless-escape */
  const cRegExp = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
  /* eslint-enable no-useless-escape */
  const validCreditCard = cRegExp.test(creditnum)
  return validCreditCard
}
export const validatorPhone = phonenum => {
  /* eslint-disable no-useless-escape */
  const cRegExp = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
  /* eslint-enable no-useless-escape */
  const validPhone = cRegExp.test(phonenum)
  return validPhone
}

export const credit = extend('credit-card', {
  validate: validatorCreditCard,
  message: 'It is not valid credit card!',
})

export const password = extend('password', {
  validate: validatorPassword,
  message: 'Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit',
})

export const phone = extend('phone', {
  validate: validatorPhone,
  message: 'Phone number is not valid',
})

export const required = extend('required', rule_required)

export const email = extend('email', rule_email)

export const min = extend('min', rule_min)

export const max = extend('max', rule_max)

export const confirmed = extend('confirmed', rule_confirmed)

export const regex = extend('regex', rule_regex)

export const between = extend('between', rule_between)

export const alpha = extend('alpha', rule_alpha)

export const integer = extend('integer', rule_integer)

export const digits = extend('digits', rule_digits)

export const length = extend('length', rule_length)


// const dictionary = {
//   en: {
//     messages: {
//       required: () => '* Required',
//     },
//   },
// };
//
// // Install required rule.
// extend("required", required);
//
// // Install email rule.
// extend("email", email);
//
// // Install min rule.
// extend("min", min);
//
// localize(dictionary);

