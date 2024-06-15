import {useState, useEffect} from "react"
import axios from "axios"

function View(){

    const [datas,setDatas] = useState([])

    useEffect(()=>{
        const url = "http://localhost:3456/view"
        axios.get(url)
            .then(res=>{
                setDatas(res.data)
            })
            },[])

                return(
                    <>
                    <table style={{border: "5px solid",padding:"10px"}}>
                        <thead style={{border: "5px solid",padding:"10px"}}>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>DateOfBirth</th>
                            <th>Number</th>
                        </thead>
                        <tbody style={{border: "5px solid",padding: "10px"}}>
                    {
                        datas.map((val,ind)=>{
                            const d= new Date(val.date_of_birth)
                            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                            return(
                                <>
                                
                                <td>{val.name}</td>
                                <td>{val.gender}</td>
                                <td>{d.getDate()}, {months[d.getMonth()]}, {d.getFullYear()}</td>
                                <td>{val.number}</td>
                                </>
                            )
                        })
                    }
                    </tbody>
                    </table>
                    </>
                )
}



export default View
