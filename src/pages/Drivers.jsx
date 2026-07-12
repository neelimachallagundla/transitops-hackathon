import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/drivers.css";


export default function Drivers(){


    const [drivers,setDrivers] = useState([

        {
            id:1,
            name:"Ravi Kumar",
            phone:"9876543210",
            license:"AP123456",
            status:"Available"
        },

        {
            id:2,
            name:"Suresh",
            phone:"9123456780",
            license:"AP789456",
            status:"On Trip"
        }

    ]);



    const [driver,setDriver] = useState({

        name:"",
        phone:"",
        license:"",
        status:""

    });



    const handleChange=(e)=>{

        setDriver({

            ...driver,
            [e.target.name]:e.target.value

        });

    };



    const handleSubmit=(e)=>{

        e.preventDefault();



        if(
            !driver.name ||
            !driver.phone ||
            !driver.license ||
            !driver.status
        ){

            alert("Please fill all fields");
            return;

        }



        const newDriver={

            id:Date.now(),
            ...driver

        };


        setDrivers([

            ...drivers,
            newDriver

        ]);



        setDriver({

            name:"",
            phone:"",
            license:"",
            status:""

        });


    };



    const deleteDriver=(id)=>{


        setDrivers(

            drivers.filter(

                (item)=>item.id !== id

            )

        );


    };




    return(

        <Layout>


            <div className="drivers-page">


                <div className="page-header">

                    <h1>
                        Drivers
                    </h1>

                    <p>
                        Manage driver information and availability
                    </p>

                </div>




                <div className="drivers-layout">





                    {/* DRIVER FORM */}


                    <div className="driver-form-card">


                        <h2>
                            Add Driver
                        </h2>



                        <form onSubmit={handleSubmit}>


                            <label>
                                Driver Name
                            </label>

                            <input

                                type="text"
                                name="name"
                                value={driver.name}
                                onChange={handleChange}
                                placeholder="Enter driver name"

                            />




                            <label>
                                Phone Number
                            </label>


                            <input

                                type="text"
                                name="phone"
                                value={driver.phone}
                                onChange={handleChange}
                                placeholder="Enter phone number"

                            />




                            <label>
                                License Number
                            </label>


                            <input

                                type="text"
                                name="license"
                                value={driver.license}
                                onChange={handleChange}
                                placeholder="Enter license number"

                            />





                            <label>
                                Status
                            </label>


                            <select

                                name="status"
                                value={driver.status}
                                onChange={handleChange}

                            >

                                <option value="">
                                    Select Status
                                </option>


                                <option value="Available">
                                    Available
                                </option>


                                <option value="On Trip">
                                    On Trip
                                </option>


                                <option value="Inactive">
                                    Inactive
                                </option>


                            </select>




                            <button type="submit">

                                Add Driver

                            </button>



                        </form>


                    </div>







                    {/* DRIVER TABLE */}



                    <div className="driver-table-card">


                        <h2>
                            Driver List
                        </h2>



                        <table>


                            <thead>

                                <tr>

                                    <th>
                                        No
                                    </th>

                                    <th>
                                        Name
                                    </th>

                                    <th>
                                        Phone
                                    </th>

                                    <th>
                                        License
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
                                drivers.map((item,index)=>(

                                    <tr key={item.id}>


                                        <td>
                                            {index+1}
                                        </td>


                                        <td>
                                            {item.name}
                                        </td>


                                        <td>
                                            {item.phone}
                                        </td>


                                        <td>
                                            {item.license}
                                        </td>


                                        <td>

                                            <span className="driver-status">

                                                {item.status}

                                            </span>

                                        </td>


                                        <td>


                                            <button

                                                className="delete-btn"

                                                onClick={()=>deleteDriver(item.id)}

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