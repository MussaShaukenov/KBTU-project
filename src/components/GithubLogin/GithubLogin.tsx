import React from 'react';
import {
    AlipayOutlined, AppleFilled,
    LockOutlined,
    MobileOutlined, RedditOutlined,
    TaobaoOutlined,
    UserOutlined,
    WeiboOutlined,
} from '@ant-design/icons';
import {
    LoginFormPage,
    ProConfigProvider,
    ProFormCaptcha,
    ProFormCheckbox,
    ProFormText,
} from '@ant-design/pro-components';
import {Button, Divider, message, Space, Tabs, theme} from 'antd';
import type {CSSProperties} from 'react';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";

type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '18px',
    verticalAlign: 'middle',
    cursor: 'pointer',
};


const GithubLogin: React.FC = () => {
    const [loginType, setLoginType] = useState<LoginType>('phone');
    const {token} = theme.useToken();
    const navigate = useNavigate();

    const waitTime = (time: number = 100) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, time);
        });
    };

    return (
        <div
            style={{
                backgroundColor: 'white',
                height: '100vh',
            }}
        >
            <LoginFormPage
                backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
                logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
                title="Github"
                containerStyle={{
                    backgroundColor: 'rgba(0, 0, 0,0.65)',
                    backdropFilter: 'blur(4px)',
                }}
                onFinish={async (values: any) => {
                    await waitTime(1000);
                    console.log(values);
                    message.success('Welcome to X');
                    navigate('/home');
                }}
                subTitle="Login with Github"
                activityConfig={{
                    style: {
                        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
                        color: token.colorTextHeading,
                        borderRadius: 8,
                        backgroundColor: 'rgba(255,255,255,0.25)',
                        backdropFilter: 'blur(4px)',
                    },
                    title: 'Github Login',
                    subTitle: 'Login with Github',
                    action: (
                        <Button
                            size="large"
                            style={{
                                borderRadius: 20,
                                background: token.colorBgElevated,
                                color: token.colorPrimary,
                                width: 120,
                            }}
                        >
                            Learn More
                        </Button>
                    ),
                }}
                actions={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Divider plain>
              <span
                  style={{
                      color: token.colorTextPlaceholder,
                      fontWeight: 'normal',
                      fontSize: 14,
                  }}
              >
                Other login methods
              </span>
                        </Divider>
                        <Space align="center" size={24}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    height: 40,
                                    width: 40,
                                    border: '1px solid ' + token.colorPrimaryBorder,
                                    borderRadius: '50%',
                                }}
                            >
                                <RedditOutlined style={{...iconStyles, color: '#FF6A10'}}/>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    height: 40,
                                    width: 40,
                                    border: '1px solid ' + token.colorPrimaryBorder,
                                    borderRadius: '50%',
                                }}
                            >
                                <AppleFilled style={{...iconStyles, color: '#1890ff'}}/>
                            </div>
                        </Space>
                    </div>
                }
            >
                <Tabs
                    centered
                    activeKey={loginType}
                    onChange={(activeKey) => setLoginType(activeKey as LoginType)}
                >
                    <Tabs.TabPane key={'account'} tab={'Account'}/>
                    <Tabs.TabPane key={'phone'} tab={'Phone number'}/>
                </Tabs>
                {loginType === 'account' && (
                    <>
                        <ProFormText
                            name="username"
                            fieldProps={{
                                size: 'large',
                                prefix: (
                                    <UserOutlined
                                        style={{
                                            color: token.colorText,
                                        }}
                                        className={'prefixIcon'}
                                    />
                                ),
                            }}
                            placeholder={'Username'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter your username',
                                },
                            ]}
                        />
                        <ProFormText.Password
                            name="password"
                            fieldProps={{
                                size: 'large',
                                prefix: (
                                    <LockOutlined
                                        style={{
                                            color: token.colorText,
                                        }}
                                        className={'prefixIcon'}
                                    />
                                ),
                            }}
                            placeholder={'Password'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter your password',
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
                                prefix: (
                                    <MobileOutlined
                                        style={{
                                            color: token.colorText,
                                        }}
                                        className={'prefixIcon'}
                                    />
                                ),
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
                                prefix: (
                                    <LockOutlined
                                        style={{
                                            color: token.colorText,
                                        }}
                                        className={'prefixIcon'}
                                    />
                                ),
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
            </LoginFormPage>
        </div>
    )
};

export default () => {
    return (
        <ProConfigProvider dark>
            <GithubLogin/>
        </ProConfigProvider>
    );
};