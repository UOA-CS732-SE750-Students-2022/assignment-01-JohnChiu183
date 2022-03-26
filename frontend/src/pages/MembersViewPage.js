import React, { useContext } from 'react';
import '../App.css';
import '../AppContextProvider';
import { AppContext } from '../AppContextProvider';
import { Card, List, Tag, Divider } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

export default function MemberViewPage(){

    const { Meta } = Card;
    const { memberList } = useContext(AppContext);

    // Key: renderItem based on dataSource can reduce coding effort when looping data  
    return(
        <List grid={{gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 6}}
                dataSource={memberList}
                renderItem={item =>(
                    <List.Item>
                        <Card style={{textAlign: 'center'}} hoverable actions={[<SettingOutlined key="setting" />]}>
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