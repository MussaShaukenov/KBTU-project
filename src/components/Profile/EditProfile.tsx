import React, { useEffect } from 'react';
import { Form } from 'antd';
import { ModalForm, ProForm, ProFormText } from "@ant-design/pro-components";
import useUserProfile from "./ProfileHook";
import axios from 'axios';

const EditProfile: React.FC = () => {
    const [form] = Form.useForm();
    const userId = '4'; // Replace with the actual user ID
    const profileData = useUserProfile(userId);

    useEffect(() => {
        form.setFieldsValue({
            first_name: profileData.firstName,
            last_name: profileData.lastName,
            bio: profileData.bio,
            location: profileData.location,
        });
    }, [form, profileData]);

    const handleEditProfileSubmit = async (values: any) => {
        try {
            const valuesWithId = {
                id: userId,
                email: profileData.email,
                password: profileData.password,
                username: profileData.username,
                ...values
            }
            await axios.put(`http://localhost:8000/profiles/${userId}/`, valuesWithId, { withCredentials: true });
            window.location.reload()
        } catch (error) {
            console.error('Error GG:', error);
        }
    };

    return (
        <>
            <ModalForm<{
                firstName: string;
                lastName: string;
                bio: string;
                location: string;
            }>
                title="Edit Profile"
                trigger={
                    <div className="editprofile">Edit Profile</div>
                }
                form={form}
                onFinish={handleEditProfileSubmit}
                autoFocusFirstInput
                modalProps={{
                    destroyOnClose: true,
                    onCancel: () => console.log('run'),
                }}
                submitTimeout={2000}
            >
                <ProForm.Group>
                    <ProFormText
                        width="md"
                        name="first_name"
                        label="First name"
                    />

                    <ProFormText
                        width="md"
                        name="last_name"
                        label="Last name"
                    />
                </ProForm.Group>
                <ProFormText
                    width="xl"
                    name="bio"
                    label="Bio"
                />
                <ProFormText
                    width="md"
                    name="location"
                    label="Location"
                />
            </ModalForm>
        </>
    );
};

export default EditProfile;
