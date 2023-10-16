import React from 'react';
import './Login.css';
import {Button, Checkbox, Form, Input} from 'antd';
import {Link} from "react-router-dom";

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: boolean;
};

function LockOutlined(props: { className: string }) {
    return null;
}

function UserOutlined(props: { className: string }) {
    return null;
}

const Login: React.FC = () => (
    <div className="container">
        <h1>Login to X</h1>
        <br/>
        <Form
            name="login"
            className="login-form"
            initialValues={{remember: false}}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{required: true, message: 'Please input your Username!'}]}
            >
                <Input autoFocus prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{required: true, message: 'Please input your Password!'}]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button style={{background: "#1c9bef"}} type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </Form.Item>
            <Form.Item>
                <span style={{color: "gray"}}>Don’t have an account?</span>
                <Button style={{marginTop: 10, background: "gray", color: "whitesmoke"}} type="primary" className="login-form-button">
                    <Link to="/register">Sign up</Link>
                </Button>
            </Form.Item>
            {/*<Form.Item>*/}
            {/*    <span style={{ color: "gray" }}>Don’t have an account?</span>*/}
            {/*    <Button style={{ marginTop: 10, background: "gray", color: "whitesmoke" }} type="primary" className="login-form-button">*/}
            {/*        <Link to="/register">Sign up</Link>*/}
            {/*    </Button>*/}
            {/*</Form.Item>*/}
        </Form>
    </div>
);

export default Login;