import React from "react";
import Step from "./Step";
import style from "./Style/Order.module.css";
import Summary from "./Summary";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useFormik } from "formik";
import {
  FormControl,
  FormLabel,
  InputLeftElement,
  InputGroup,
  Input,
  Select,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";
import { takeOrder } from "API/API";
import { validationSchema } from "./Validation";
import { ShopCartContext } from "Context/ShopCartContext";
const OrderAddress = () => {
  const { cart } = React.useContext(ShopCartContext);
  const [addressError, setAddressError] = React.useState("");


  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        addressHeader: "",
        phone: "",
        address: "",
        city: "",
        zipCode: "",
      },
      validationSchema,
      onSubmit: async () => {
        try {
          const response = await takeOrder({
            phone: values.phone,
            address: values.address,
            city: values.city,
            zipCode: values.zipCode,
            items: cart,
          });
       
        } catch (error) {
          setAddressError(error.response.data.message)
        }
      },
    });

  return (
    <section className={style.orderMain}>
      <div className="container">
        <Step />
        <div className="row justify-content-center g-3">
          <div className="col-lg-8">
            <div className={style.orderForm}>
              <form onSubmitCapture={handleSubmit}>
                {
                  addressError && <FormErrorMessage>{addressError}</FormErrorMessage>
                }
                <div className="row align-items-center g-3">
                  <div className="col-lg-2">
                    <FormLabel htmlFor="icon" className={style.label}>
                      Icon
                    </FormLabel>
                    <Select
                      focusBorderColor="green.500"
                      className="fs-3"
                      id="icon"
                      name="icon"
                      borderColor="gray.300"
                    >
                      <option className="text-center">🏡</option>
                      <option className="text-center">🏢</option>
                      <option className="text-center">🏬</option>
                      <option className="text-center">🏭</option>
                      <option className="text-center">🏪</option>
                      <option className="text-center">🏩</option>
                    </Select>
                  </div>
                  <div className="col-lg-10">
                    <FormControl isRequired>
                      <FormLabel
                        htmlFor="addressHeader"
                        className={style.label}
                      >
                        Address Header ( Home, Office )
                      </FormLabel>
                      <Input
                        name="addressHeader"
                        focusBorderColor="green.500"
                        id="addressHeader"
                        borderColor="gray.300"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={
                          errors.addressHeader && touched.addressHeader && true
                        }
                        errorBorderColor="red.500"
                      />
                    </FormControl>
                  </div>
                </div>
                <div className="row align-items-center g-3">
                  <div className="col-lg-4">
                    <FormControl className="my-2" isRequired>
                      <FormLabel htmlFor="city" className={style.label}>
                        City
                      </FormLabel>
                      <Input
                        focusBorderColor="green.500"
                        name="city"
                        id="city"
                        borderColor="gray.300"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={errors.city && touched.city && true}
                        errorBorderColor="red.500"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-4">
                    <FormControl className="my-2" isRequired>
                      <FormLabel htmlFor="zipCode" className={style.label}>
                        Zip Code
                      </FormLabel>
                      <Input
                        borderColor="gray.300"
                        focusBorderColor="green.500"
                        name="zipCode"
                        id="zipCode"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={errors.zipCode && touched.zipCode && true}
                        errorBorderColor="red.500"
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-4">
                    <FormControl className="my-2" isRequired>
                      <FormLabel htmlFor="phone" className={style.label}>
                        Phone Number
                      </FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<BsFillTelephoneFill color="gray.300" />}
                        />
                        <Input
                          type="tel"
                          borderColor="gray.300"
                          id="phone"
                          name="phone"
                          focusBorderColor="green.500"
                          placeholder="Without +1"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={errors.phone && touched.phone && true}
                          errorBorderColor="red.500"
                        />
                      </InputGroup>
                    </FormControl>
                  </div>
                </div>
                <div className="col-12">
                  <FormControl isRequired>
                    <FormLabel htmlFor="address" className={style.label}>
                      Address
                    </FormLabel>
                    <Textarea
                      id="address"
                      name="address"
                      borderColor="gray.300"
                      focusBorderColor="green.500"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.address && touched.address && true}
                      errorBorderColor="red.500"
                    />
                  </FormControl>
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className={style.submit}
                >
                  submit
                </button>
              </form>
            </div>
          </div>
          <Summary buttonTitle="Go to pay" process="address" />
        </div>
      </div>
    </section>
  );
};

export default OrderAddress;
