import React from "react";
import style from "./Style/LoginandRegister.module.css";
import { Form, Input, Select, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { GrFacebook, GrGooglePlus } from "react-icons/gr";
import { useFormik } from "formik";
import { validationSchema } from "./RegisterValidation";
const RegisterForm = () => {
  const { Option } = Select;
  const [genderValue, setGenderValue] = React.useState("");
  const { handleChange, handleSubmit, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: genderValue,
      },
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <section className={style.loginForm}>
      <div className="container">
        <div className="col-lg-12">
          <div className={style.formWrapper}>
            <h3 className={style.formTitle}>
              Don't miss the excellent flavors!
            </h3>
            <div className={style.socialArea}>
              <Link to="#" className={`${style.socialItem} ${style.facebook}`}>
                <GrFacebook className={style.icon} />{" "}
                <span className={style.socialText}>Sign up with Facebook</span>
              </Link>
              <Link to="#" className={`${style.socialItem} ${style.google}`}>
                <GrGooglePlus className={style.icon} />{" "}
                <span className={style.socialText}>Sign up with Google</span>
              </Link>
            </div>
            <Form
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 8,
              }}
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
              onSubmitCapture={handleSubmit}
            >
              <Form.Item
                label={<label className={style.label}>Name</label>}
                name="name"
                id="name"
                help={errors.name && touched.name && errors.name}
                validateStatus={errors.name && touched.name && "error"}
                className={style.label}
              >
                <Input onBlur={handleBlur} onChange={handleChange} />
              </Form.Item>
              <Form.Item
                label={<label className={style.label}>Last Name</label>}
                name="lastname"
                className={style.label}
                id="lastname"
                help={errors.lastname && touched.lastname && errors.lastname}
                validateStatus={errors.lastname && touched.lastname && "error"}
              >
                <Input onBlur={handleBlur} onChange={handleChange} />
              </Form.Item>
              <Form.Item
                label={<label className={style.label}>Email</label>}
                name="email"
                className={style.label}
                help={errors.email && touched.email && errors.email}
                validateStatus={errors.email && touched.email && "error"}
              >
                <Input onBlur={handleBlur} onChange={handleChange} />
              </Form.Item>

              <Form.Item
                label={<label className={style.label}>Password</label>}
                name="password"
                className={style.label}
                help={errors.password && touched.password && errors.password}
                validateStatus={errors.password && touched.password && "error"}
              >
                <Input.Password onBlur={handleBlur} onChange={handleChange} />
              </Form.Item>
              <Form.Item
                label={<label className={style.label}>Confirm Password</label>}
                name="confirmPassword"
                id="confirmPassword"
                className={style.label}
                help={
                  errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword
                }
                validateStatus={
                  errors.confirmPassword && touched.confirmPassword && "error"
                }
              >
                <Input.Password onBlur={handleBlur} onChange={handleChange} />
              </Form.Item>
              <Form.Item help={
                  errors.gender &&
                  touched.gender &&
                  errors.gender
                }
                className={style.label}
                validateStatus={
                  errors.gender && touched.gender && "error"
                } label={<label className={style.label}>Gender</label>}>
                <Select
                  onBlur={handleBlur}
                  onChange={(value) => setGenderValue((values.gender = value))}
                  defaultValue="Select"
                  style={{ width: 120 }}
                  
                >
                  <Option value="female">Female</Option>
                  <Option value="male">Male</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 8,
                }}
              >
                <Checkbox className={style.checkBox}>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 8,
                }}
                className="text-center"
              >
                <Button
                  type="btn"
                  className={style.submitBtn}
                  htmlType="submit"
                >
                  Sign up
                </Button>
                <br />
                <Link to="/login" className={style.registerLink}>
                  Do you already have an account? Sign in.
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
