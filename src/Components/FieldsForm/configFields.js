export const FormDirectionRow = true;

// cardName, cardNumber, cardMMYYYY, cardCvc

export const FieldsUserForm = [
  {
    variant: 'outlined', // standard || outlined || filled
    id: 1,
    nameField: 'name',
    label: 'Name',
    type: 'text',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Enter a valid name.',
    maxLength: '',
    width: '33.3%',
  },
  {
    variant: 'outlined',
    id: 2,
    nameField: 'email',
    label: 'E-mail',
    type: 'text',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Enter a valid e-mail.',
    maxLength: '',
    width: '33.3%',
  },
  {
    variant: 'outlined',
    id: 3,
    nameField: 'cpf',
    label: 'CPF',
    type: 'text',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Enter a valid cpf.',
    maxLength: '',
    width: '33.3%',
  },
  {
    variant: 'outlined',
    id: 4,
    nameField: 'phone',
    label: 'Phone',
    type: 'text',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Enter a valid phone.',
    maxLength: '',
    width: '33.3%',
  },
  {
    variant: 'outlined',
    id: 5,
    nameField: 'password',
    label: 'Password',
    type: 'password',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Your password must be at least 5 characters.',
    maxLength: '',
    width: '33.3%',
  },
  {
    variant: 'outlined',
    id: 6,
    nameField: 'passwordConfirm',
    label: 'Password confirm',
    type: 'password',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Passwords must be the same.',
    maxLength: '',
    width: '33.3%',
  },
];

export const FieldsAdress = [
  {
    variant: 'outlined',
    id: 1,
    nameField: 'zipcode',
    label: 'Zip Code',
    type: 'text',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Enter a valid zip code.',
    maxLength: '',
    width: '25%',
  },
  {
    variant: 'outlined',
    id: 2,
    nameField: 'address',
    label: 'Address',
    type: 'text',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Enter a valid address.',
    maxLength: '',
    width: '60%',
  },
  {
    variant: 'outlined',
    id: 3,
    nameField: 'number',
    label: 'Number',
    type: 'text',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Enter a valid number.',
    maxLength: 7,
    width: '15%',
  },
  {
    variant: 'outlined',
    id: 4,
    nameField: 'complement',
    label: 'Complement',
    type: 'text',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Enter a valid complement.',
    maxLength: 20,
    width: '25%',
  },
  {
    variant: 'outlined',
    id: 5,
    nameField: 'neighborhood',
    label: 'Neighborhood',
    type: 'text',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Enter a valid neighborhood.',
    maxLength: '',
    width: '25%',
  },
  {
    variant: 'outlined',
    id: 6,
    nameField: 'city',
    label: 'City',
    type: 'text',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Enter a valid city.',
    maxLength: '',
    width: '25%',
  },
  {
    variant: 'outlined',
    id: 7,
    nameField: 'state',
    label: 'State',
    type: 'select',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Enter a valid state.',
    maxLength: '',
    width: '25%',
  },
];

export const FieldsPayment = [
  {
    variant: 'outlined',
    id: 1,
    nameField: 'cardName',
    label: 'Card name',
    type: 'text',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Enter a valid card name code.',
    maxLength: '',
    width: '50%',
  },
  {
    variant: 'outlined',
    id: 2,
    nameField: 'cardNumber',
    label: 'Card number',
    type: 'text',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Enter a valid card number.',
    maxLength: '',
    width: '50%',
  },
  {
    variant: 'outlined',
    id: 3,
    nameField: 'cardMMYYYY',
    label: 'validity month/year',
    type: 'text',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Enter a valid month/year.',
    maxLength: '',
    width: '50%',
  },
  {
    variant: 'outlined',
    id: 4,
    nameField: 'cardCvc',
    label: 'CVC',
    type: 'text',
    icon: 'fa fa-user',
    placeholder: '',
    msgError: 'Enter a valid cvc.',
    maxLength: 3,
    width: '50%',
  },
];
