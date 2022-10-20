import { Button, Form, Input } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import {  clearUserData, showLoading } from 'redux/actions';
import { connect, useSelector } from "react-redux";
import Loading from 'components/shared-components/Loading';
import { useHistory } from "react-router-dom";
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const initialValues = {'name':'', 'username':'', 'email':'', 'phone':'', 'company':''}

const UserEdit = ({ clearUserData, showLoading}) => {
    const [userData, setUserData] = useState({});
    const data = useSelector((state) => state.user)
    const {loading} = useSelector((state) => state.user)
    const form = useRef(null)
    const history = useHistory();
useEffect(()=>{   
   setUserData(data);
   }
   ,[data])

useEffect(()=>{
  if (!loading) {form.current.setFieldsValue(userData)}
},[userData])

  const onFinish = (values) => {
    showLoading()
     setTimeout(() => {
       clearUserData();
      history.push(`${APP_PREFIX_PATH}/clients-list`)}, 1000)
  };

if (loading) return <Loading/>

  return (
    <div> 
    <h1>Информация о себе:</h1>
    <Form
      ref={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 116,
      }}
      
      autoComplete="off"
      style={{
        width: '750px',
        marginTop:'100px',
        marginLeft:'100px'
      }}
      initialValues={initialValues}
    >
    <Form.Item
      label="Имя"
      name="name"
      >
    <Input style={{
        borderColor:'#3E79F7',
        opacity:'70%'
    }} 
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
    <Button type="primary" htmlType="submit" onClick={onFinish}>
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
    const { clearUserData, showLoading} =  user;
    return { clearUserData, showLoading}
  };
  
  export default connect(mapStateToProps, { clearUserData, showLoading})(UserEdit);
  

