import * as Yup from 'yup';

export const validationSchemaAddress = Yup.object({
    addressHeader: Yup.string().required(),
    city: Yup.string().required(),
    zipCode: Yup.string().required(),
    phone: Yup.string().required().min(10),
    address: Yup.string().required(),
})

export const validationSchemaPayment = Yup.object({
    cardNumber: Yup.string().required(),
    ownerName: Yup.string().required(),
    ownerLastName: Yup.string().required(),
    cardExpiryMonth: Yup.string().required(),
    cardExpiryYear: Yup.string().required(),
    cardCvv: Yup.string().required().min(3),
})