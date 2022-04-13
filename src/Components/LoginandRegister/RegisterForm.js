import React from "react";
import style from "./Style/LoginandRegister.module.css";
import { Form, Input, Select, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { GrFacebook, GrGooglePlus } from "react-icons/gr";
const RegisterForm = () => {
  const { Option } = Select;
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
                label={<label className={style.label}>Name</label>}
                name="Email"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={<label className={style.label}>Surname</label>}
                name="Email"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={<label className={style.label}>Email</label>}
                name="Email"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={<label className={style.label}>Password</label>}
                name="password"
                className={style.label}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label={<label className={style.label}>Password Confirm</label>}
                name="password"
                className={style.label}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item label={<label className={style.label}>Gender</label>}>
                <Select defaultValue="Select" style={{ width: 120 }}>
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
