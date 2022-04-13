import React from "react";
import style from "./Style/LoginandRegister.module.css";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import {GrFacebook,GrGooglePlus} from "react-icons/gr";
const LoginForm = () => {
  return (
    <section className={style.loginForm}>
      <div className="container">
        <div className="col-lg-12">
          <div className={style.formWrapper}>
            <h3 className={style.formTitle}>Login To Order Now !</h3>
            <div className={style.socialArea}>
                <Link to="#" className={`${style.socialItem} ${style.facebook}`}>
                    <GrFacebook className={style.icon} /> <span className={style.socialText}>Sign in with Facebook</span>
                </Link>
                <Link to="#" className={`${style.socialItem} ${style.google}`}>
                    <GrGooglePlus className={style.icon} /> <span className={style.socialText}>Sign in with Google</span>
                </Link>

            </div>
            <Form
              name="basic"
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
                label={
                    <label className={style.label}>Email</label>
                }
                name="Email"
                
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={
                    <label className={style.label}>Password</label>
                }
                name="password"
                className={style.label}
              >
                <Input.Password />
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
                <Button type="btn" className={style.submitBtn} htmlType="submit">
                  Sign in
                </Button>
                <p className={style.forgotPassword}> Forgot Password?</p>
                <Link to="/register" className={style.registerLink}> Don't have an account? Let's join us!</Link>
              </Form.Item>
             
            </Form>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;