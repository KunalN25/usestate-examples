import React from 'react'
import { useState } from 'react'

const tableData1 = [
    {
        "id": 1,
        "first_name": "Elisa",
        "last_name": "Belfield",
        "city": "Nice"
    }, 
    {
        "id": 2,
        "first_name": "Celeste",
        "last_name": "Paulich",
        "city": "Cachada"
    }, 
    {
        "id": 3,
        "first_name": "Bambi",
        "last_name": "Wiltshire",
        "city": "Rulong"
    }, 
    {
        "id": 4,
        "first_name": "Farica",
        "last_name": "Frain",
        "city": "Da’an"
    }, 
    {
        "id": 5,
        "first_name": "Merola",
        "last_name": "Kennaird",
        "city": "Mönsterås"
    }
]

const tableData2 = [{
    "id": 1,
    "first_name": "Damien",
    "city": "Tyresö",
    "bitcoin_address": "1DErVwRbDRi6kMJGQgaHPxuzbEXzen93Pc",
    "credit_card": "3570765394552683",
    "card_type": "jcb",
    "currency": "Krona"
  }, {
    "id": 2,
    "first_name": "Waverley",
    "city": "Vlkoš",
    "bitcoin_address": "115JfWzoU8YWTjd9kY55Uf2uabSy2HNarA",
    "credit_card": "6763536469611054",
    "card_type": "maestro",
    "currency": "Koruna"
  }, {
    "id": 3,
    "first_name": "Piggy",
    "city": "Kimito",
    "bitcoin_address": "139aZfGi73VEXsBfyS3SETLkkcgi9nbhtt",
    "credit_card": "3558087313896067",
    "card_type": "jcb",
    "currency": "Euro"
  }, {
    "id": 4,
    "first_name": "Evelin",
    "city": "Takari",
    "bitcoin_address": "1LG8fjqkjj46ZHRBLHWdnRzEGsgLSHNSsC",
    "credit_card": "3547632615571159",
    "card_type": "jcb",
    "currency": "Rupiah"
  }, {
    "id": 5,
    "first_name": "Adham",
    "city": "Montceau-les-Mines",
    "bitcoin_address": "1JEpQKHdQD6rBLWefNyd7njzz8C9PsYkTA",
    "credit_card": "560221535380717885",
    "card_type": "china-unionpay",
    "currency": "Euro"
  }]
  
const MultipleTables = () => {

    const [toggleTables, setToggleTables] = useState(false)

    const handleClick = () => {
        setToggleTables(!toggleTables);
    }
  return (
    <div>
        <div>
            <button onClick={handleClick} >
                Show the other table
            </button>
        </div>
        <div>
            {
                toggleTables ? 
            
                    <table>
                        <tr>
                            <th>id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>City</th>
                        </tr>
                        {tableData1.map(data => (
                            <tr>
                                <td> {data.id} </td>
                                <td> {data.first_name} </td>
                                <td> {data.last_name} </td>
                                <td> {data.city} </td>

                            </tr>
                        ))}
                    </table>
                :  
                    <table>
                        <tr>
                            <th>id</th>
                            <th>First Name</th>
                            <th>City</th>
                            <th>Bitcoin Address</th>
                            <th>Credit Card</th>
                            <th>Card Type</th>
                            <th>Currency</th>
                        </tr>
                        {tableData2.map(data => (
                            <tr>
                                <td> {data.id} </td>
                                <td> {data.first_name} </td>
                                <td> {data.city} </td>
                                <td> {data.bitcoin_address} </td>
                                <td> {data.credit_card} </td>
                                <td> {data.card_type} </td>
                                <td> {data.currency} </td>
                            </tr>
                        ))}
                    </table>
            } 
        </div>

        

        
          
    </div>
  )
}

export default MultipleTables