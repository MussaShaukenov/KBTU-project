import React, {useState} from 'react';
import './Registration.css';
import {
    Button,
    Flex,
    Form,
    Input,
    Select
} from 'antd';
import {Link as RouterLink} from "react-router-dom";
import {Space, Typography} from 'antd';

const {Text, Link, Title} = Typography;
const {Option} = Select;

interface DataNodeType {
    value: string;
    label: string;
    children?: DataNodeType[];
}

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 8},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const Registration: React.FC = () => {
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{width: 80}}>
                <Option value="7">+7</Option>
                <Option value="123">+123</Option>
            </Select>
        </Form.Item>
    );

    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    function UserOutlined(props: { className: string }) {
        return null;
    }
    function LockOutlined(props: { className: string }) {
        return null;
    }

    return (
        <div className="register-container">
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                scrollToFirstError
                initialValues={{prefix: '123' }}
            >
                <Form.Item>
                    <Title level={2} style={{width: "100%"}}>Create your Account</Title>
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{required: true, message: 'Please input your email!'}]}
                >
                    <Input autoFocus prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email..."/>
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

                <Form.Item
                    name="username"
                    rules={[{required: true, message: 'Please input your username!', whitespace: true}]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                </Form.Item>

                <Form.Item
                    name="phone"
                >
                    <Input placeholder="7017010011" addonBefore={prefixSelector} style={{width: '100%'}}/>
                </Form.Item>

                <Form.Item
                    name="gender"
                >
                    <Select placeholder="Select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                >
                    <Space direction="vertical" style={{textAlign: "center"}}>
                        <Text type={"secondary"} style={{fontSize: ".8em"}}>
                            By signing up, you agree to the
                            <RouterLink target="blank" to="https://twitter.com/en/tos#new">
                                <span style={{color: "#1c9bef"}}> Terms of Service </span>
                            </RouterLink>
                            and
                            <RouterLink target="blank" to="https://twitter.com/en/privacy">
                                <span style={{color: "#1c9bef"}}> Privacy Policy </span>
                            </RouterLink>
                            including
                            <RouterLink target="blank"
                                        to="https://help.twitter.com/en/rules-and-policies/x-cookies">
                                <span style={{color: "#1c9bef"}}> Cookie Use. </span>
                            </RouterLink>
                            Twitter may use your contact information,
                            including your email address and phone number for purposes outlined in our Privacy
                            Policy,
                            like keeping your account secure and personalising our services, including ads.
                            <RouterLink target="blank" to="https://twitter.com/en/privacy">
                                <span style={{color: "#1c9bef"}}> Learn more. </span>
                            </RouterLink>
                        </Text>
                    </Space>
                </Form.Item>

                <Form.Item>
                    <Button style={{width: "100%", background: "#1c9bef"}} type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>

                <Form.Item>
                    <span style={{color: "gray"}}>Already have an account?</span>
                    <Button style={{marginTop: 10, background: "gray", color: "whitesmoke"}} type="primary" className="login-form-button">
                        <RouterLink to="/login">
                            Login
                        </RouterLink>
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Registration;