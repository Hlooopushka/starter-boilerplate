import { Space, Table, Tag } from 'antd';
import axios from 'axios';
import Loading from 'components/shared-components/Loading';
import React, { useEffect, useState } from 'react';
const columns = [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Никнейм',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Компания',
    dataIndex: 'company',
    key: 'company',
  },
];



const filterItem = (item) => {
      const result = {
        key: item.id,
        name: item.name,
        username: item.username,
        email: item.email, 
        phone: item.phone,
        company: item.company.name
      }
      return  result
}

const data = [
  {
    key: '1',
    name: 'John Brown',
    username: 'Kim',
    email: 'kim@brown.com', 
    phone: '645226987412',
    company: 'Company & Co'
  },
];
const ClientTable = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const fetchUsers = async () => {
            setTimeout(setLoading(true), 1000) ;
            let users = [];
            const result = await axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                users = [...resp.data]
            })
            .catch(err => console.log(err))
        
            if  (users.length > 0) {
                const filteredUsers = users.map(item => {
                    return filterItem(item);
                })
                setUsers(filteredUsers)
            }
            else {return []}
            setLoading(false);
        }
        fetchUsers()
    },[])

    if (loading) { return <Loading/>}

    return<Table columns={columns} dataSource={users} />
};
export default ClientTable;