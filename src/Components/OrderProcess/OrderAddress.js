import React from "react";
import Step from "./Step";
import style from "./Style/Order.module.css";
import Summary from "./Summary";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useFormik } from "formik";
import {IoMdAlert} from "react-icons/io";
import {
  FormControl,
  FormLabel,
  InputLeftElement,
  InputGroup,
  Input,
  Select,
  Textarea,
  FormErrorMessage,
  Checkbox,
  Alert
} from "@chakra-ui/react";
import { takeOrder } from "API/API";
import { validationSchemaAddress } from "./Validation";
import { ShopCartContext } from "Context/ShopCartContext";
import Lottie  from "lottie-react";

const OrderAddress = () => {
  const { cart,handleStep } = React.useContext(ShopCartContext);
  const [isLoading, setIsLoading] = React.useState(false);
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
      validationSchema: validationSchemaAddress,
      onSubmit: async () => {
        setIsLoading(true);
        try {
          const response = await takeOrder({
            phone: values.phone,
            address: values.address,
            city: values.city,
            zipCode: values.zipCode,
            items: cart,
          });
          
            
            setTimeout(() => {
              setIsLoading(false);
              handleStep("address");
            }, 2500);
          
        } catch (error) {
          setAddressError(error.response.data.message);

                setIsLoading(false);
        }
      },
    });

  return (
    <section className={style.orderMain}>
      <div className="container">
        <Step />
        <div className="row position-relative justify-content-center g-3">
        {isLoading && (
            <div className={style.loader}>
              <Lottie
                  className={style.lottiePay}
                  loop="true"
                  animationData={require("Assets/pizzaLoader.json")}
                />
            </div>
          )}
          <div className="col-lg-8">
            <div className={style.orderForm}>
              <form onSubmitCapture={handleSubmit}>
                {addressError && (
                  <Alert className="my-2" status='error'>
                    <IoMdAlert className="text-danger fs-4 me-2" />
                  {addressError}
                </Alert>
                )}
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
                      <option className="text-center">????</option>
                      <option className="text-center">????</option>
                      <option className="text-center">????</option>
                      <option className="text-center">????</option>
                      <option className="text-center">????</option>
                      <option className="text-center">????</option>
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
                <div className="col-12 my-2">
                  <FormControl>
                    <Checkbox
                      id="saveAddress"
                      colorScheme="green"
                      name="saveAddress"
                      onChange={handleChange}
                    >
                      Save address for the future orders{" "}
                    </Checkbox>
                  </FormControl>
                </div>
              </form>
            </div>
          </div>
          <Summary>
          <button
              type="button"
              onClick={handleSubmit}
              className={style.nextStepBtn}
            >
             Go to Pay
            </button>
          </Summary>
        </div>
      </div>
    </section>
  );
};

export default OrderAddress;
