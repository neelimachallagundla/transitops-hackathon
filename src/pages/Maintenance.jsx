import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/maintenance.css";


export default function Maintenance(){


    const [records,setRecords] = useState([

        {
            id:1,
            vehicle:"AP01AB1234",
            issue:"Engine Service",
            date:"12-07-2026",
            cost:"5000",
            status:"Completed"
        },

        {
            id:2,
            vehicle:"AP02CD5678",
            issue:"Brake Repair",
            date:"15-07-2026",
            cost:"2500",
            status:"Pending"
        }

    ]);



    const [maintenance,setMaintenance] = useState({

        vehicle:"",
        issue:"",
        date:"",
        cost:"",
        status:""

    });



    const handleChange=(e)=>{

        setMaintenance({

            ...maintenance,
            [e.target.name]:e.target.value

        });

    };



    const handleSubmit=(e)=>{

        e.preventDefault();



        if(
            !maintenance.vehicle ||
            !maintenance.issue ||
            !maintenance.date ||
            !maintenance.cost ||
            !maintenance.status
        ){

            alert("Please fill all fields");
            return;

        }



        const newRecord={

            id:Date.now(),
            ...maintenance

        };



        setRecords([

            ...records,
            newRecord

        ]);



        setMaintenance({

            vehicle:"",
            issue:"",
            date:"",
            cost:"",
            status:""

        });


    };



    const deleteRecord=(id)=>{


        setRecords(

            records.filter(

                (item)=>item.id !== id

            )

        );


    };




    return(


        <Layout>


            <div className="maintenance-page">



                <div className="page-header">


                    <h1>
                        Maintenance
                    </h1>


                    <p>
                        Track vehicle service and repairs
                    </p>


                </div>





                <div className="maintenance-layout">





                    {/* FORM */}


                    <div className="maintenance-form-card">


                        <h2>
                            Add Maintenance
                        </h2>



                        <form onSubmit={handleSubmit}>


                            <label>
                                Vehicle Number
                            </label>


                            <input

                                type="text"
                                name="vehicle"
                                value={maintenance.vehicle}
                                onChange={handleChange}
                                placeholder="Vehicle number"

                            />




                            <label>
                                Issue
                            </label>


                            <input

                                type="text"
                                name="issue"
                                value={maintenance.issue}
                                onChange={handleChange}
                                placeholder="Problem description"

                            />




                            <label>
                                Service Date
                            </label>


                            <input

                                type="date"
                                name="date"
                                value={maintenance.date}
                                onChange={handleChange}

                            />





                            <label>
                                Repair Cost
                            </label>


                            <input

                                type="number"
                                name="cost"
                                value={maintenance.cost}
                                onChange={handleChange}
                                placeholder="Amount"

                            />





                            <label>
                                Status
                            </label>


                            <select

                                name="status"
                                value={maintenance.status}
                                onChange={handleChange}

                            >


                                <option value="">
                                    Select Status
                                </option>


                                <option value="Pending">
                                    Pending
                                </option>


                                <option value="In Progress">
                                    In Progress
                                </option>


                                <option value="Completed">
                                    Completed
                                </option>



                            </select>




                            <button type="submit">

                                Add Record

                            </button>



                        </form>


                    </div>







                    {/* TABLE */}




                    <div className="maintenance-table-card">


                        <h2>
                            Maintenance Records
                        </h2>




                        <table>


                            <thead>

                                <tr>


                                    <th>
                                        No
                                    </th>


                                    <th>
                                        Vehicle
                                    </th>


                                    <th>
                                        Issue
                                    </th>


                                    <th>
                                        Date
                                    </th>


                                    <th>
                                        Cost
                                    </th>


                                    <th>
                                        Status
                                    </th>


                                    <th>
                                        Action
                                    </th>


                                </tr>


                            </thead>




                            <tbody>


                            {

                                records.map((item,index)=>(


                                    <tr key={item.id}>


                                        <td>
                                            {index+1}
                                        </td>


                                        <td>
                                            {item.vehicle}
                                        </td>


                                        <td>
                                            {item.issue}
                                        </td>


                                        <td>
                                            {item.date}
                                        </td>


                                        <td>
                                            ₹ {item.cost}
                                        </td>


                                        <td>

                                            <span className="maintenance-status">

                                                {item.status}

                                            </span>


                                        </td>



                                        <td>


                                            <button

                                                className="delete-btn"

                                                onClick={()=>deleteRecord(item.id)}

                                            >

                                                Delete

                                            </button>


                                        </td>



                                    </tr>


                                ))

                            }



                            </tbody>



                        </table>



                    </div>



                </div>



            </div>



        </Layout>


    );


}