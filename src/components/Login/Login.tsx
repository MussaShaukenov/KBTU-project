import React from 'react';
import './Login.css';
import {
    GithubOutlined,
    LockOutlined,
    MobileOutlined,
    RedditOutlined,
    UserOutlined,
    AppleFilled
} from '@ant-design/icons';
import {
    LoginForm, ModalForm,
    ProConfigProvider,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
    setAlpha,
} from '@ant-design/pro-components';
import {message, Space, Tabs, theme} from 'antd';
import type {CSSProperties} from 'react';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";

type LoginType = 'phone' | 'account';

const Login: React.FC = () => {
    const {token} = theme.useToken();
    const [loginType, setLoginType] = useState<LoginType>('phone');
    const navigate = useNavigate();

    const waitTime = (time: number = 100) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, time);
        });
    };

    const iconStyles: CSSProperties = {
        marginInlineStart: '16px',
        fontSize: '24px',
        verticalAlign: 'middle',
        cursor: 'pointer',
    };

    const GithubIconStyles: CSSProperties = {
        ...iconStyles,
        color: "#333"
    }

    const RedditIconStyles: CSSProperties = {
        ...iconStyles,
        color: "#FF4500"
    }

    return (
        <ModalForm
            submitter={{
                searchConfig: {
                    submitText: 'Submit',
                    resetText: 'Close',
                }
            }}
            trigger={
                <div>
                    <div><button className="sign-in">Sign in</button></div>
                </div>
            }
            onFinish={async (values: any) => {
                await waitTime(1000);
                console.log(values);
                message.success('Welcome to X');
                navigate('/home');
            }}
        >
            <ProConfigProvider hashed={false}>
                <div style={{backgroundColor: token.colorBgContainer}}>
                    <LoginForm
                        logo="https://i.redd.it/ly352vh0v0i71.jpg"
                        subTitle="Welcome to X"
                        actions={
                            <Space>
                                Other ways to log in
                                <GithubOutlined style={GithubIconStyles}/>
                                <RedditOutlined style={RedditIconStyles}/>
                                <AppleFilled style={iconStyles}/>
                            </Space>
                        }
                        onFinish={async (values: any) => {
                            await waitTime(1000);
                            console.log(values);
                            message.success('Welcome to X');
                            navigate('/home');
                        }}
                    >
                        <Tabs
                            centered
                            activeKey={loginType}
                            onChange={(activeKey) => setLoginType(activeKey as LoginType)}
                        >
                            <Tabs.TabPane key={'account'} tab={'Password'}/>
                            <Tabs.TabPane key={'phone'} tab={'Phone number'}/>
                        </Tabs>
                        {loginType === 'account' && (
                            <>
                                <ProFormText
                                    name="username"
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <UserOutlined className={'prefixIcon'}/>,
                                    }}
                                    placeholder={'Username'}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter the username!',
                                        },
                                    ]}
                                />
                                <ProFormText.Password
                                    name="password"
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <LockOutlined className={'prefixIcon'}/>,
                                    }}
                                    placeholder={'Password'}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter the password！',
                                        },
                                    ]}
                                />
                            </>
                        )}
                        {loginType === 'phone' && (
                            <>
                                <ProFormText
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <MobileOutlined className={'prefixIcon'}/>,
                                    }}
                                    name="phone"
                                    placeholder={'Phone number'}
                                    rules={[
                                        {required: true, message: 'Phone number is required'},
                                        {max: 50, message: 'Phone number cannot exceed 50 characters'},
                                        {
                                            validator: (_, value) => {
                                                if (!value || /^[\d+]+$/.test(value)) {
                                                    // The input is either empty or contains only digits and/or '+'
                                                    return Promise.resolve();
                                                } else {
                                                    return Promise.reject('Enter a valid phone number');
                                                }
                                            },
                                        },
                                    ]}
                                />
                                <ProFormCaptcha
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <LockOutlined className={'prefixIcon'}/>,
                                    }}
                                    captchaProps={{
                                        size: 'large',
                                    }}
                                    placeholder={'Verification code'}
                                    captchaTextRender={(timing, count) => {
                                        if (timing) {
                                            return `${count} ${'seconds'}`;
                                        }
                                        return 'Get verification code';
                                    }}
                                    name="captcha"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter the verification code',
                                        },
                                    ]}
                                    onGetCaptcha={async () => {
                                        message.success('Verification code：1234');
                                    }}
                                />
                            </>
                        )}
                        <div
                            style={{
                                marginBlockEnd: 24,
                            }}
                        >
                            <ProFormCheckbox noStyle name="autoLogin">
                                Automatic login
                            </ProFormCheckbox>
                            <a
                                style={{
                                    float: 'right',
                                }}
                            >
                                Forgot password
                            </a>
                        </div>
                    </LoginForm>
                </div>
            </ProConfigProvider>
        </ModalForm>
    )
};

export default Login;
// <div className="container">
//     <h1>Login to X</h1>
//     <br/>
//     <Form
//         name="login"
//         className="login-form"
//         initialValues={{remember: false}}
//         onFinish={onFinish}
//     >
//         <Form.Item
//             name="username"
//             rules={[{required: true, message: 'Please input your Username!'}]}
//         >
//             <Input autoFocus prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
//         </Form.Item>
//         <Form.Item
//             name="password"
//             rules={[{required: true, message: 'Please input your Password!'}]}
//         >
//             <Input
//                 prefix={<LockOutlined className="site-form-item-icon"/>}
//                 type="password"
//                 placeholder="Password"
//             />
//         </Form.Item>
//         <Form.Item>
//             <Form.Item name="remember" valuePropName="checked" noStyle>
//                 <Checkbox>Remember me</Checkbox>
//             </Form.Item>
//
//             <a className="login-form-forgot" href="">
//                 Forgot password
//             </a>
//         </Form.Item>
//
//         <Form.Item>
//             <Button style={{background: "#1c9bef"}} type="primary" htmlType="submit" className="login-form-button">
//                 Log in
//             </Button>
//         </Form.Item>
//         <Form.Item>
//             <span style={{color: "gray"}}>Don’t have an account?</span>
//             <Button style={{marginTop: 10, background: "gray", color: "whitesmoke"}} type="primary" className="login-form-button">
//                 <Link to="/register">Sign up</Link>
//             </Button>
//         </Form.Item>
//         {/*<Form.Item>*/}
//         {/*    <span style={{ color: "gray" }}>Don’t have an account?</span>*/}
//         {/*    <Button style={{ marginTop: 10, background: "gray", color: "whitesmoke" }} type="primary" className="login-form-button">*/}
//         {/*        <Link to="/register">Sign up</Link>*/}
//         {/*    </Button>*/}
//         {/*</Form.Item>*/}
//     </Form>
// </div>
