import React, { useState } from 'react';
import {Form, Input, Select, Button} from 'antd';
import '../App.css';

export default function AddMemberPage(){


    const { Option } = Select;
    const [form] = Form.useForm();


    const formItemLayout = {
      labelCol: {xs: {span: 24},sm: {span: 6}},
      wrapperCol: {xs: {span: 24},sm: {span: 12}}
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {offset: 11},sm: {offset: 11}}
    };
    
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    
    const prefixSelector = (
        <Form.Item name="Prefix" noStyle>
          <Select style={{width: 70,}}>
            <Option value="64">+64</Option>
            <Option value="886">+886</Option>
          </Select>
        </Form.Item>
    );

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <Form {...formItemLayout} form={form} name="register" onFinish={onFinish}
          initialValues={{Prefix: '64', Salutation: 'Mr.'}} scrollToFirstError>

            <Form.Item label="Full Name" style={{ marginBottom: 0 }}>
                <Form.Item name="Salutation" style={{ display: 'inline-block', width: '16%', textAlign: 'center'}}>
                    <Select>
                        <Option value="mr">Mr.</Option>
                        <Option value="miss">Miss</Option>
                        <Option value="mrs">Mrs.</Option>
                        <Option value="ms">Ms.</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="FirstName"
                    rules={[{
                        required: true,
                        message: 'First name, please',
                        whitespace: true,
                    }]}
                    style={{ display: 'inline-block', width: 'calc(28%)' }}>
                    <Input placeholder="First Name" style={{textAlign:'center'}} />
                </Form.Item>
                <Form.Item name="MiddleName"
                    style={{ display: 'inline-block', width: 'calc(28%)' }}>
                    <Input placeholder="Middle Name" style={{textAlign:'center'}} />
                </Form.Item>
                <Form.Item name="LastName"
                    rules={[
                    {
                        required: true,
                        message: 'Last name, please',
                        whitespace: true,
                    }]}
                    style={{ display: 'inline-block', width: 'calc(28%)' }}>
                    <Input placeholder="Last Name" style={{textAlign:'center'}}/>
                </Form.Item>
            </Form.Item>

        <Form.Item name="Email" label="Email" rules={[{required: true, type: 'email'}]}>
            <Input />
        </Form.Item>
    
        <Form.Item label="Job Information" style={{ marginBottom: 0 }}>
            <Form.Item name="CompanyName"
                rules={[
                {
                    required: true,
                    message: 'Please input the company name of the new member!',
                    whitespace: true,
                }]}
                style={{ display: 'inline-block', width: 'calc(50%)' }}>
                <Input placeholder="Company Name" style={{textAlign:'center'}}/>
            </Form.Item>
            <Form.Item name="Position"
                rules={[
                {
                    required: true,
                    message: 'Please input the title of the new member!',
                    whitespace: true,
                }]}
                style={{ display: 'inline-block', width: 'calc(50%)' }}>
                <Input placeholder="Job Title" style={{textAlign:'center'}}/>
            </Form.Item>
        </Form.Item>
    
        <Form.Item name="Phone" label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!'
              }
            ]}>
            <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
        </Form.Item>
        <Form.Item name="HashTag" label="Member Group">
            <Select mode="tags" style={{ width: '100%' }} placeholder="Please input the group name of this new member" onChange={handleChange}></Select>
        </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register New Member
            </Button>
          </Form.Item>
        </Form>
    );
}