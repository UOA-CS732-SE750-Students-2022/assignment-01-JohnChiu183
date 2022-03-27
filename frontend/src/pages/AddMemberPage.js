import React, { useContext } from 'react';
import {Form, Input, Select, Button, Modal} from 'antd';
import '../App.css';
import '../AppContextProvider';
import { AppContext } from '../AppContextProvider';
import { NavLink, useNavigate, Link} from 'react-router-dom';

export default function AddMemberPage(){

    const { Option } = Select;
    const [form] = Form.useForm();
    const {memberList, addNewMemberToList} = useContext(AppContext);
    let navigate = useNavigate(); 

    // Ant design support different layout style in a single form
    const formItemLayout = {
      labelCol: {xs: {span: 24},sm: {span: 6}},
      wrapperCol: {xs: {span: 24},sm: {span: 12}}
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {offset: 11},sm: {offset: 11}}
    };

    // Post-process when the "Register New Member" button has been clicked
    // In finish event handling, we just saved submit JSON by AppContextProvider
    // Once finished, the page will redirect to the home page (i.e., Member Management page )
    
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        addNewMemberToList(values);
        Modal.success(
            {
                title: 'Create Member Success',
                content: (
                    <div><b>{values.Salutation} {values.LastName}</b> has been added to the membership 
                    database, and the email: <b>{values.Email}</b> will be the member's ID.</div>
                ),
                onOk(){
                    navigate("../");
                }
            }
        );
    };
    
    // Setup options of the phone prefix, write the function here can easily update the content by other data sources. 
    const prefixSelector = (
        <Form.Item name="Prefix" noStyle>
          <Select style={{width: 70,}}>
            <Option value="64">+64</Option>
            <Option value="886">+886</Option>
          </Select>
        </Form.Item>
    );

    // Once the Hastag been added, can do something interaction with the database or mapping table
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (

        // In the form design, we can give initial vaules for some fields and assign finish event
        <Form {...formItemLayout} form={form} name="register" onFinish={onFinish}
          initialValues={{Prefix: '64', Salutation: 'Mr.'}} scrollToFirstError>

            <Form.Item label="Full Name" style={{ marginBottom: 0 }}>
                <Form.Item name="Salutation" style={{ display: 'inline-block', width: '16%', textAlign: 'center'}}>
                    <Select>
                        <Option value="Mr">Mr.</Option>
                        <Option value="Miss">Miss</Option>
                        <Option value="Mrs">Mrs.</Option>
                        <Option value="Ms">Ms.</Option>
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

        {/* In addition, we can customized rules such as required and its error message. 
            It's noticeable that some pre-defined validate type has already made for us such as email format!!!
            The type detail can be found in https://github.com/yiminghe/async-validator#type
        */}

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
                message: 'Please input your phone number!',
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