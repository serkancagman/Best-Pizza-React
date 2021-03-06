import React from "react";
import style from "./Style/LoginandRegister.module.css";
import { Form, Input, Button, Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { GrFacebook, GrGooglePlus } from "react-icons/gr";
import { useFormik } from "formik";
import { validationSchema } from "./LoginValidation";
import { userLogin } from "API/API";
import { UserContext } from "Context/UserContext";
import { useToast } from "@chakra-ui/react";
const LoginForm = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const showToast = (message, type, path = "/") => {
    if (type === "success") {
      toast({
        title: "Register Successful",
        description: "Welcome" + " " + message + "👋",
        status: "success",
        duration: 2000,
        position: "top",
      });
      navigate(path);
    } else {
      toast({
        title: "Register Failed",
        description: message,
        status: "error",
        duration: 2000,
        position: "top",
      });
    }
  };
  const { userData } = React.useContext(UserContext);
  const { handleChange, handleSubmit, handleBlur, touched, errors } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema,
      onSubmit: async (values) => {
        try {
          const response = await userLogin(values);
          showToast(response.user.name, "success");

          setTimeout(() => {
            userData(response);
          }, 2000);
        } catch (error) {
          showToast(error.response.data.message, "failed");
        }
      },
    }
  );
  return (
    <section className={style.loginForm}>
      <div className="container">
        <div className="col-lg-12">
          <div className={style.formWrapper}>
            <h3 className={style.formTitle}>Login To Order Now !</h3>
            <div className={style.socialArea}>
              <Link to="#" className={`${style.socialItem} ${style.facebook}`}>
                <GrFacebook className={style.icon} />{" "}
                <span className={style.socialText}>Sign in with Facebook</span>
              </Link>
              <Link to="#" className={`${style.socialItem} ${style.google}`}>
                <GrGooglePlus className={style.icon} />{" "}
                <span className={style.socialText}>Sign in with Google</span>
              </Link>
            </div>
            <Form
              onSubmitCapture={handleSubmit}
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
            >
              <Form.Item
                label={<label className={style.label}>Email</label>}
                name="email"
                help={errors.email && touched.email && errors.email}
                validateStatus={errors.email && touched.email && "error"}
              >
                <Input onBlur={handleBlur} onChange={handleChange} />
              </Form.Item>

              <Form.Item
                label={<label className={style.label}>Password</label>}
                name="password"
                help={errors.password && touched.password && errors.password}
                validateStatus={errors.password && touched.password && "error"}
              >
                <Input.Password onBlur={handleBlur} onChange={handleChange} />
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
                  Sign in
                </Button>
                <p className={style.forgotPassword}> Forgot Password?</p>
                <Link to="/register" className={style.registerLink}>
                  {" "}
                  Don't have an account? Let's join us!
                </Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
