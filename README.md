Hi mate,

Thanks for reading the README. Below are the structure of the contents

1. Ant design and demo case introduction
2. Installation guide and component usage
3. Function introduction  
    3.1 AddMemberPage.js - Create New Member  
    3.2 MembersViewPage.js - Membership overview and management

***

## Ant design and demo case introduction  

Ant design React is dedicated to providing a good development experience for programmers. Before starting, it is recommended to learn React and ES2015 first, and correctly install and configure Node.js v8 or above (https://ant.design/docs/react/getting-started). Most of the time, people judge a thing by its physical appearance and the web application is no exception. A website can leverage the UI/UX experts to achieve the goal, or we can just apply some pre-defined UI/UX framework such as Ant design to meet the same desire.   

The demonstration will focus on the part of Customer Relationship Management or CRM system: `membership creation` and `management`. The scenario is that a non-profitable organisation want to keep the connection of their membership to promote events and training. The organisation does without much budget to maintain an IT expert team or outsource the web development. The only resource is the summer intern. The requirement from the client is to generate a simple CRM to manage their membership but not compromise with the look. Thus, applying a well-development UI framework such as Ant design is the best way to deliver an app with well and consistent looking in a limited time. Following is the prototyping of the website.  

![prototyping](https://user-images.githubusercontent.com/87575042/160287009-573e47f2-7899-4cfc-b8ea-843d45a719dd.png)


## Installation guide and component usage  

0. In general, if you intentd to apply Ant design (assume that your environment is React ready). The only thing you have to do is install the Ant design package using yarn command: `yarn add antd`
1. Import related components that you used in the page (\*.js), take Button as an example: `import {Button} from 'antd';` 
2. Modify corresponding setting of the CSS file, add `@import '~antd/dist/antd.css';` on the top of the file.
3. Once step 0 to 2 has been done, we can now show up our Ant design styled button as following    

```
import React from 'react';
import { Button } from 'antd';
import './App.css';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;
```

4. For the detailed started guide, please refer to the [Ant design](https://ant.design/docs/react/use-with-create-react-app#Install-and-Initialization) page.

### Steps to run the CRM application

1. Clone the repository into your local environment, the Git repo url is: https://github.com/UOA-CS732-SE750-Students-2022/assignment-01-JohnChiu183.git
2. Open the terminal and change the directory to `.\assignment-01-JohnChiu183\frontend`
3. Using `yarn` command to update the dependencies of the project.
4. Run the application by `npm run start` and the CRM application should be ready in `http://localhost:3000` and wait for testing.  

## Function introduction

This simple CRM application has a header/content/footer display setting. The navigation menu includes 2 functions to complete a basic membership management scenario. The default page will be the 'Member Management", and except the "Create Member" page can be accessed through the URL, the rest connection will redirect back to the home page. The `React.Routes` as below:  
```
          <Routes>
            <Route path="/">
              <Route index element={<MemberViewPage />} />
              <Route path="addMember" element={<AddMemberPage />}/>
              <Route path="*" element={<NoSuchPage />}/>
            </Route>
          </Routes>
```

### AddMemberPage.js - Create New Member

A simple CRM membership management application provides a new member creation function that allows the staff from the organisation to add essential information about the member. The filed include `First Name`, `Middle Name `, `Last Name`, `Salutation`, `Email`, `Company Name`, `Job Title`, `Phone`, `HashTag`, in which the `Email` will be the unique key. The benefit of the Ant design components is that we can save lots of time on input validation by [pre-defined validation type](https://github.com/yiminghe/async-validator#type) such as email and date. In addition, with a great integration among field validation, we can configure the field necessity, error message and validate types or methods in the `rules` property (line 107).

```
        <Form.Item  name="Email" label="Email"
                    rules={[{
                        required: true, 
                        message: 'Real email, please',
                        type: 'email'}]}>
            <Input />
        </Form.Item>
```
Ant design also support a signel form with different layout style,
```
    const formItemLayout = {
      labelCol: {xs: {span: 24},sm: {span: 6}},
      wrapperCol: {xs: {span: 24},sm: {span: 12}}
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {offset: 11},sm: {offset: 11}}
    };
```
It is noticeable that the last field of the registration form is named `HashTag`, just like most contact applications, it will allow users to give new member tags for member group management. Once the register form submitted, the content of the form will store as JSON format then save on the AppContext. Moreover, we can easy to pop up a Modal to show some confirm message to the user by using `Modal` compoments as following (line 33):
```
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
```

The `Create New Member` page will look as below:

<img width="940" alt="image" src="https://user-images.githubusercontent.com/87575042/160327779-01a1ea77-5efb-4f7a-bad0-504512a51d3f.png">


### MembersViewPage.js - Membership overview and management  
