import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/trips.css";


export default function Trips(){


    const [trips,setTrips] = useState([

        {
            id:1,
            route:"Hyderabad - Vijayawada",
            vehicle:"AP01AB1234",
            driver:"Ravi Kumar",
            date:"12-07-2026",
            status:"Completed"
        },

        {
            id:2,
            route:"Vizag - Rajahmundry",
            vehicle:"AP02CD5678",
            driver:"Suresh",
            date:"13-07-2026",
            status:"Scheduled"
        }

    ]);



    const [trip,setTrip] = useState({

        route:"",
        vehicle:"",
        driver:"",
        date:"",
        status:""

    });



    const handleChange=(e)=>{

        setTrip({

            ...trip,
            [e.target.name]:e.target.value

        });

    };



    const handleSubmit=(e)=>{

        e.preventDefault();


        if(
            !trip.route ||
            !trip.vehicle ||
            !trip.driver ||
            !trip.date ||
            !trip.status
        ){

            alert("Please fill all fields");
            return;

        }



        const newTrip={

            id:Date.now(),
            ...trip

        };


        setTrips([

            ...trips,
            newTrip

        ]);



        setTrip({

            route:"",
            vehicle:"",
            driver:"",
            date:"",
            status:""

        });


    };



    const deleteTrip=(id)=>{

        setTrips(

            trips.filter(

                (item)=>item.id !== id

            )

        );

    };




    return(

        <Layout>


            <div className="trips-page">


                <div className="page-header">

                    <h1>
                        Trips
                    </h1>

                    <p>
                        Manage routes and trip schedules
                    </p>

                </div>




                <div className="trips-layout">



                    {/* ADD TRIP FORM */}


                    <div className="trip-form-card">


                        <h2>
                            Add Trip
                        </h2>


                        <form onSubmit={handleSubmit}>


                            <label>
                                Route
                            </label>

                            <input

                                type="text"
                                name="route"
                                value={trip.route}
                                onChange={handleChange}
                                placeholder="Enter route"

                            />



                            <label>
                                Vehicle
                            </label>

                            <input

                                type="text"
                                name="vehicle"
                                value={trip.vehicle}
                                onChange={handleChange}
                                placeholder="Vehicle number"

                            />



                            <label>
                                Driver
                            </label>


                            <input

                                type="text"
                                name="driver"
                                value={trip.driver}
                                onChange={handleChange}
                                placeholder="Driver name"

                            />



                            <label>
                                Trip Date
                            </label>


                            <input

                                type="date"
                                name="date"
                                value={trip.date}
                                onChange={handleChange}

                            />



                            <label>
                                Status
                            </label>


                            <select

                                name="status"
                                value={trip.status}
                                onChange={handleChange}

                            >

                                <option value="">
                                    Select Status
                                </option>


                                <option value="Scheduled">
                                    Scheduled
                                </option>


                                <option value="Running">
                                    Running
                                </option>


                                <option value="Completed">
                                    Completed
                                </option>


                                <option value="Cancelled">
                                    Cancelled
                                </option>


                            </select>



                            <button type="submit">

                                Add Trip

                            </button>


                        </form>


                    </div>







                    {/* TRIP TABLE */}



                    <div className="trip-table-card">


                        <h2>
                            Trip List
                        </h2>



                        <table>


                            <thead>

                                <tr>

                                    <th>
                                        No
                                    </th>

                                    <th>
                                        Route
                                    </th>

                                    <th>
                                        Vehicle
                                    </th>

                                    <th>
                                        Driver
                                    </th>

                                    <th>
                                        Date
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
                                trips.map((item,index)=>(

                                    <tr key={item.id}>


                                        <td>
                                            {index+1}
                                        </td>


                                        <td>
                                            {item.route}
                                        </td>


                                        <td>
                                            {item.vehicle}
                                        </td>


                                        <td>
                                            {item.driver}
                                        </td>


                                        <td>
                                            {item.date}
                                        </td>


                                        <td>

                                            <span className="trip-status">

                                                {item.status}

                                            </span>

                                        </td>


                                        <td>


                                            <button

                                                className="delete-btn"

                                                onClick={()=>deleteTrip(item.id)}

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