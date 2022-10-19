import { Table} from 'antd';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Loading from 'components/shared-components/Loading';
import React, { useEffect, useState } from 'react';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import { putUserData } from 'redux/actions/User';
import { connect } from "react-redux";

const columns = [
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Фамилия',
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


const ClientTable = ({ putUserData  }) => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const history = useHistory();

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

    return( 
    <div className='ant-table-wrapper'>
      <Table 
        columns={columns} 
        dataSource={users} 
        onRow={(row, rowIndex)=>{
          return {
            onClick: event => {
              if (event.target.nodeName === 'A') 
              {
                putUserData(row)
                history.push(`${APP_PREFIX_PATH}/user-edit`)
              }
                //{console.log('clicked');} else {console.log('wrong cell')}
              
            }
          }
        }}/> 
      </div>
    )
};

const mapStateToProps = ({ user }) => {
  const { putUserData  } =  user;
  return { putUserData  }
};

export default connect(mapStateToProps, {putUserData})(ClientTable);
