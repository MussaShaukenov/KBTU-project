import React from "react";
import {
    ModalForm,
    ProCard,
    ProForm,
    ProFormDatePicker,
    ProFormSelect,
    ProFormText,
    ProFormTextArea,
    StepsForm,
} from '@ant-design/pro-components';
import {Button, message} from 'antd';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

const Register: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function validateAge(_: any, value: string | number | Date) {
        if (!value) {
            return Promise.resolve(); // No date selected; validation passed
        }
        // Calculate the age based on the selected birthdate
        const birthDate = new Date(value);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthDate.getFullYear();

        if (age >= 14) {
            return Promise.resolve(); // User is 14 or older; validation passed
        } else {
            return Promise.reject('This platform is only for 14+');
        }
    }

    function validateName(_: any, value: string) {
        if (!value) {
            return Promise.reject('Name is required');
        }
        const formattedValue = value
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        if (formattedValue.length > 50) {
            return Promise.reject('Name cannot exceed 50 characters');
        }
        return Promise.resolve(formattedValue);
    }

    return (
        <>
            <ModalForm
                submitter={{
                    searchConfig: {
                        submitText: 'Submit',
                        resetText: 'Close',
                    }
                }}
                trigger={<div>
                    <button className="create-account">Create account</button>
                </div>}
                onFinish={async (values: any) => {
                    await waitTime(1000);
                    console.log(values);
                    message.success('Submitted successfully');

                    // After form submission, navigate to the "/home" page
                    navigate('/home');
                }}
            >
                <ProCard>
                    <StepsForm
                        onFinish={async () => {
                            setLoading(true);
                            await waitTime(1000);
                            message.success('Success');
                            setLoading(false);
                        }}
                        submitter={{
                            render: ({form, onSubmit, step, onPre}) => {
                                return [
                                    <Button
                                        key="reset"
                                        style={{backgroundColor: "red", color: "white"}}
                                        onClick={() => {
                                            form?.resetFields();
                                        }}
                                    >
                                        Reset
                                    </Button>,
                                    step > 0 && (
                                        <Button
                                            key="pre"
                                            onClick={() => {
                                                onPre?.();
                                            }}
                                        >
                                            Go back
                                        </Button>
                                    ),
                                    <Button
                                        key="next"
                                        loading={loading}
                                        type="primary"
                                        style={{backgroundColor: "#1DA1F2", color: "white"}}
                                        onClick={() => {
                                            onSubmit?.();
                                        }}
                                    >
                                        Next
                                    </Button>,
                                ];
                            },
                        }}
                        formProps={{
                            validateMessages: {
                                required: 'Required',
                            },
                        }}
                    >
                        <StepsForm.StepForm
                            name="base"
                            title="Step"
                            onFinish={async () => {
                                setLoading(true);
                                await waitTime(2000);
                                setLoading(false);
                                return true;
                            }}
                        >
                            <h1>Create your account</h1>
                            <ProFormText
                                name="name"
                                label="Name"
                                width="md"
                                tooltip="What's your name?"
                                placeholder="Name"
                                rules={[
                                    {validator: validateName},
                                ]}
                            />
                            <ProFormText
                                name="phone"
                                label="Phone"
                                width="md"
                                placeholder="Phone"
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
                            <ProFormDatePicker
                                name="birthday"
                                label="Birthday"
                                placeholder="Birthday"
                                rules={[
                                    {required: true, message: 'Birthday is required'},
                                    {validator: validateAge},
                                ]}
                            />
                        </StepsForm.StepForm>
                        <StepsForm.StepForm name="checkbox" title="Step">
                            <ProFormSelect
                                name="gender"
                                label="Gender"
                                width="lg"
                                rules={[{required: true}]}
                                options={[
                                    {value: 'male', label: 'Male'},
                                    {value: 'female', label: 'Female'},
                                    {value: 'other', label: 'Other'},
                                ]}/>
                            <ProForm.Group>
                                <ProFormText
                                    name="country"
                                    label="Country"
                                    placeholder="Country"
                                />
                            </ProForm.Group>
                            <ProFormTextArea
                                name="bio"
                                label="Bio"
                                width="lg"
                                placeholder="Your bio"/>
                        </StepsForm.StepForm>
                        <StepsForm.StepForm name="time" title="Step">
                            <ProFormText.Password
                                name="password"
                                label="Password"
                                width="md"
                                placeholder="Password"
                                rules={[
                                    {required: true, message: 'Password is required'},
                                ]}
                            />
                            <ProFormText.Password
                                name="password-confirm"
                                label="Password confirmation"
                                width="md"
                                placeholder="Password confirmation"
                                rules={[
                                    {required: true, message: 'Password is required'},
                                ]}
                            />
                        </StepsForm.StepForm>
                    </StepsForm>
                </ProCard>
            </ModalForm>
        </>
    );
};

export default Register;