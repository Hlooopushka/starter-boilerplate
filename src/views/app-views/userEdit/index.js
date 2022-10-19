import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import {  clearUserData } from 'redux/actions';
import { connect, useSelector } from "react-redux";
import Loading from 'components/shared-components/Loading';




const UserEdit = ({ clearUserData}) => {
    const [userData, setUserData] = useState({});
    const data = useSelector((state) => state.user)

useEffect(() => {
    setUserData(data);
}, [data])
  const onFinish = (values) => {
    console.log('Success:', values);
  };
const [save, setSave] = useState({
  name:'', 
  username:'', 
  email: '', 
  phone:'', 
  company:''
});

const handleChange =(e) => {
  const value = e.target.value;
  <Loading/>
  setSave({
    ...save,
    [e.target.name]: value
  });
}


  return (
    <div> 
    <h1>Информация о себе:</h1>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 116,
      }}
      onFinish={onFinish}
      autoComplete="off"
      style={{
        width: '750px',
        marginTop:'100px',
        marginLeft:'100px'
      }}
    >
    <Form.Item
      label="Имя"
      name="name"
      >
    <Input style={{
        borderColor:'#3E79F7',
        opacity:'70%'
    }} 
        placeholder={userData.name}
    />
      </Form.Item>
      <Form.Item
      label="Фамилия"
      name="username"
      >
    <Input style={{
        borderColor:'#3E79F7',
        opacity:'70%'
    }} 
    placeholder={userData.username}/>
      </Form.Item>
      <Form.Item
      label="email"
      name="email"
      >
    <Input style={{
        borderColor:'#3E79F7',
        opacity:'70%'
    }}
    placeholder={userData.email}/>
      </Form.Item>
      <Form.Item
      label="Телефон"
      name="phone"
      >
    <Input style={{
        borderColor:'#3E79F7',
        opacity:'70%'
    }} 
    placeholder={userData.phone}/>
      </Form.Item>
      <Form.Item
      label="Компания"
      name="company"
      >
    <Input style={{
        borderColor:'#3E79F7',
        opacity:'70%'
    }}
    placeholder={userData.company}/>
      </Form.Item>
    <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
    <Button type="primary" htmlType="submit" save={handleChange} >
          Сохранить
    </Button>
    <Button type="primary" htmlType="reset"
        style={{
            marginLeft:'50px'
        }}
        >
          Отменить
    </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

const mapStateToProps = ({ user }) => {
    const { clearUserData} =  user;
    return { clearUserData}
  };
  
  export default connect(mapStateToProps, { clearUserData})(UserEdit);
  

