import React, { useContext } from 'react';
import '../App.css';
import '../AppContextProvider';
import { AppContext } from '../AppContextProvider';
import { Card, List, Tag, Divider,Modal } from 'antd';
import { DeleteOutlined, InfoCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

export default function MemberViewPage(){

    const { Meta } = Card;
    const { memberList, removeMemberFromTheList } = useContext(AppContext);
    const { confirm } = Modal;

    function handleInfoOperate(values) {
        Modal.info({
          title: 'Detailed Member Information',
          content: (
            <div style={{paddingTop: 10}}>
              <p>
                    Full Name: <b>{values.Salutation} {values.FirstName} ({values.MiddleName}) {values.LastName}</b> <br/>
                    Company: <b>{values.CompanyName}</b><br/>
                    Job Title: <b>{values.Position}</b><br/>
                    Phone: <b>+{values.Prefix} {values.Phone}</b><br/>
                    Email: <b>{values.Email}</b><br/>
                    <Divider orientation="center" style={{fontSize: 'smaller'}}>Member HashTags</Divider>
                    {values.HashTag.map((tag) => <Tag color="blue">{tag}</Tag>)}
              </p>
            </div>
          ),
          onOk() {},
        });
      }

    function handleDeleteOperate(values){

        confirm({
            title: 'Do you Want to delete these member?',
            icon: <ExclamationCircleOutlined />,
            
            onOk() {
                const result = removeMemberFromTheList(values.Email);
                console.log(result);
            }
          });
    }

    // Key: renderItem based on dataSource can reduce coding effort when looping data  
    return(
        <List grid={{gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 6}}
                dataSource={memberList}
                renderItem={item =>(
                    <List.Item>
                        <Card style={{textAlign: 'center'}} hoverable actions={[<InfoCircleOutlined key='info' onClick={() => handleInfoOperate(item)}/>, <DeleteOutlined key="delete" onClick={() => handleDeleteOperate(item)}/>]}>
                            <Meta
                                title={item.LastName + ' ' + item.FirstName}  
                                description={
                                    <div>
                                        <p>{item.CompanyName + '-' + item.Position} <br/>
                                            {item.Email} <br/>
                                            <Divider orientation="center" style={{fontSize: 'smaller'}}>Member HashTags</Divider>
                                            {item.HashTag.map((tag) => <Tag color="blue">{tag}</Tag>)}
                                        </p>
                                    </div>}/>
                        </Card>
                    </List.Item>
                )}/>
    );
}