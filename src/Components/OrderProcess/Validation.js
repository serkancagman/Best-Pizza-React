import * as Yup from 'yup';

export const validationSchema = Yup.object({
    addressHeader: Yup.string().required(),
    city: Yup.string().required(),
    zipCode: Yup.string().required(),
    phone: Yup.string().required().min(10),
    address: Yup.string().required(),
})