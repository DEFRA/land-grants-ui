import {
  Button,
  Checkboxes,
  createAll,
  ErrorSummary,
  Header,
  Radios,
  SkipLink
} from 'govuk-frontend'

createAll(Button)
createAll(Checkboxes)
createAll(ErrorSummary)
createAll(Header)
createAll(Radios)
createAll(SkipLink)

document.addEventListener('DOMContentLoaded', () => { 
  console.log('client code')
})