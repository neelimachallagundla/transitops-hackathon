import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/vehicles.css";


export default function Vehicles() {


    const [vehicles, setVehicles] = useState([
        {
            id: 1,
            number: "AP01AB1234",
            type: "Bus",
            driver: "Ravi Kumar",
            status: "Active"
        },
        {
            id: 2,
            number: "AP02CD5678",
            type: "Van",
            driver: "Suresh",
            status: "Maintenance"
        }
    ]);


    const [vehicle, setVehicle] = useState({

        number: "",
        type: "",
        driver: "",
        status: ""

    });



    const handleChange = (e) => {

        setVehicle({

            ...vehicle,
            [e.target.name]: e.target.value

        });

    };



    const handleSubmit = (e) => {

        e.preventDefault();


        if(
            !vehicle.number ||
            !vehicle.type ||
            !vehicle.driver ||
            !vehicle.status
        ){

            alert("Please fill all fields");
            return;

        }


        const newVehicle = {

            id: Date.now(),
            ...vehicle

        };


        setVehicles([

            ...vehicles,
            newVehicle

        ]);



        setVehicle({

            number:"",
            type:"",
            driver:"",
            status:""

        });

    };



    const deleteVehicle = (id)=>{


        setVehicles(

            vehicles.filter(

                (item)=> item.id !== id

            )

        );

    };



    return (

        <Layout>


            <div className="vehicles-page">


                <div className="page-header">

                    <h1>
                        Vehicles
                    </h1>

                    <p>
                        Manage your fleet vehicles
                    </p>

                </div>



                <div className="vehicle-layout">



                    {/* ADD VEHICLE FORM */}

                    <div className="vehicle-form-card">


                        <h2>
                            Add Vehicle
                        </h2>


                        <form onSubmit={handleSubmit}>


                            <label>
                                Vehicle Number
                            </label>

                            <input

                                type="text"
                                name="number"
                                value={vehicle.number}
                                onChange={handleChange}
                                placeholder="Enter vehicle number"

                            />



                            <label>
                                Vehicle Type
                            </label>


                            <select

                                name="type"
                                value={vehicle.type}
                                onChange={handleChange}

                            >

                                <option value="">
                                    Select type
                                </option>

                                <option value="Bus">
                                    Bus
                                </option>

                                <option value="Van">
                                    Van
                                </option>

                                <option value="Truck">
                                    Truck
                                </option>


                            </select>




                            <label>
                                Driver Name
                            </label>


                            <input

                                type="text"
                                name="driver"
                                value={vehicle.driver}
                                onChange={handleChange}
                                placeholder="Enter driver name"

                            />




                            <label>
                                Status
                            </label>


                            <select

                                name="status"
                                value={vehicle.status}
                                onChange={handleChange}

                            >

                                <option value="">
                                    Select status
                                </option>

                                <option value="Active">
                                    Active
                                </option>

                                <option value="Maintenance">
                                    Maintenance
                                </option>

                                <option value="Inactive">
                                    Inactive
                                </option>


                            </select>



                            <button type="submit">

                                Add Vehicle

                            </button>


                        </form>


                    </div>





                    {/* VEHICLE TABLE */}


                    <div className="vehicle-table-card">


                        <h2>
                            Vehicle Inventory
                        </h2>



                        <table>


                            <thead>

                                <tr>

                                    <th>
                                        No
                                    </th>

                                    <th>
                                        Number
                                    </th>

                                    <th>
                                        Type
                                    </th>

                                    <th>
                                        Driver
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
                                vehicles.map((item,index)=>(

                                    <tr key={item.id}>


                                        <td>
                                            {index + 1}
                                        </td>


                                        <td>
                                            {item.number}
                                        </td>


                                        <td>
                                            {item.type}
                                        </td>


                                        <td>
                                            {item.driver}
                                        </td>


                                        <td>

                                            <span className="status">

                                                {item.status}

                                            </span>

                                        </td>


                                        <td>


                                            <button

                                                className="delete-btn"
                                                onClick={()=>deleteVehicle(item.id)}

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