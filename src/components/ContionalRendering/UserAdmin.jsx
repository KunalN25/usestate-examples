import React from 'react'
import { useState } from 'react'

const tableData = [{
    "id": 1,
    "first_name": "Starla",
    "city": "Garagoa"
  }, {
    "id": 2,
    "first_name": "Arlene",
    "city": "Keumala"
  }, {
    "id": 3,
    "first_name": "Lemmie",
    "city": "Chocianów"
  }, {
    "id": 4,
    "first_name": "Joachim",
    "city": "Castlerea"
  }, {
    "id": 5,
    "first_name": "Myrta",
    "city": "Mieszkowice"
}]


const UserAdmin = () => {

  const [user, setUser] = useState({
      name: 'kunal',
      isAdmin: true
  })  

  
  return (
    <div>
        <table>
            <tr>
                <th>id</th>
                <th>First Name</th>
                <th>City</th>
                {user.isAdmin &&  <th>Action</th>}
            </tr>
            {tableData.map(data => (
                <tr>
                    <td> {data.id} </td>
                    <td> {data.first_name} </td>
                    <td> {data.city} </td>
                    {user.isAdmin &&  
                        <td>
                            <button> Edit </button>
                        </td>
                    }

                </tr>
            ))}
        </table>
    </div>
  )
}

export default UserAdmin