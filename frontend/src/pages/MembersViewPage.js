import React, { useContext } from 'react';
import '../App.css';
import '../AppContextProvider';
import { AppContext } from '../AppContextProvider';
import { Card, List } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

export default function MemberViewPage(){

    const { Meta } = Card;
    const { memberList } = useContext(AppContext);

    // Key: renderItem based on dataSource can reduce coding effort when looping data  
    return(
        <List grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3}}
                dataSource={memberList}
                renderItem={item =>(
                    <List.Item>
                        <Card hoverable actions={[<SettingOutlined key="setting" />]}>
                            <Meta
                                title={item.LastName + ' ' + item.FirstName}  
                                description={
                                    <div>
                                        <p>{item.CompanyName + '-' + item.Position} <br/>
                                            {item.Email} <br/>
                                            {item.HashTag}
                                        </p>
                                    </div>}/>
                        </Card>
                    </List.Item>
                )}/>

    );
}