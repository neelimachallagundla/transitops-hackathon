import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/expenses.css";


export default function Expenses(){


    const [expenses,setExpenses] = useState([

        {
            id:1,
            category:"Fuel",
            vehicle:"AP01AB1234",
            description:"Diesel refill",
            amount:"8000",
            date:"12-07-2026",
            status:"Paid"
        },

        {
            id:2,
            category:"Repair",
            vehicle:"AP02CD5678",
            description:"Brake replacement",
            amount:"3500",
            date:"14-07-2026",
            status:"Pending"
        }

    ]);



    const [expense,setExpense] = useState({

        category:"",
        vehicle:"",
        description:"",
        amount:"",
        date:"",
        status:""

    });



    const handleChange=(e)=>{

        setExpense({

            ...expense,
            [e.target.name]:e.target.value

        });

    };



    const handleSubmit=(e)=>{

        e.preventDefault();



        if(
            !expense.category ||
            !expense.vehicle ||
            !expense.description ||
            !expense.amount ||
            !expense.date ||
            !expense.status
        ){

            alert("Please fill all fields");
            return;

        }



        const newExpense={

            id:Date.now(),
            ...expense

        };



        setExpenses([

            ...expenses,
            newExpense

        ]);



        setExpense({

            category:"",
            vehicle:"",
            description:"",
            amount:"",
            date:"",
            status:""

        });


    };



    const deleteExpense=(id)=>{


        setExpenses(

            expenses.filter(

                (item)=>item.id !== id

            )

        );


    };





    return(


        <Layout>


            <div className="expenses-page">



                <div className="page-header">


                    <h1>
                        Expenses
                    </h1>


                    <p>
                        Track operational expenses
                    </p>


                </div>





                <div className="expenses-layout">





                    {/* EXPENSE FORM */}



                    <div className="expense-form-card">


                        <h2>
                            Add Expense
                        </h2>



                        <form onSubmit={handleSubmit}>


                            <label>
                                Category
                            </label>


                            <select

                                name="category"
                                value={expense.category}
                                onChange={handleChange}

                            >

                                <option value="">
                                    Select Category
                                </option>

                                <option value="Fuel">
                                    Fuel
                                </option>

                                <option value="Repair">
                                    Repair
                                </option>

                                <option value="Insurance">
                                    Insurance
                                </option>

                                <option value="Other">
                                    Other
                                </option>


                            </select>





                            <label>
                                Vehicle Number
                            </label>


                            <input

                                type="text"
                                name="vehicle"
                                value={expense.vehicle}
                                onChange={handleChange}
                                placeholder="Vehicle number"

                            />





                            <label>
                                Description
                            </label>


                            <input

                                type="text"
                                name="description"
                                value={expense.description}
                                onChange={handleChange}
                                placeholder="Expense description"

                            />





                            <label>
                                Amount
                            </label>


                            <input

                                type="number"
                                name="amount"
                                value={expense.amount}
                                onChange={handleChange}
                                placeholder="Amount"

                            />





                            <label>
                                Date
                            </label>


                            <input

                                type="date"
                                name="date"
                                value={expense.date}
                                onChange={handleChange}

                            />





                            <label>
                                Payment Status
                            </label>


                            <select

                                name="status"
                                value={expense.status}
                                onChange={handleChange}

                            >

                                <option value="">
                                    Select Status
                                </option>


                                <option value="Paid">
                                    Paid
                                </option>


                                <option value="Pending">
                                    Pending
                                </option>



                            </select>





                            <button type="submit">

                                Add Expense

                            </button>



                        </form>


                    </div>








                    {/* TABLE */}




                    <div className="expense-table-card">


                        <h2>
                            Expense Records
                        </h2>




                        <table>


                            <thead>


                                <tr>


                                    <th>
                                        No
                                    </th>


                                    <th>
                                        Category
                                    </th>


                                    <th>
                                        Vehicle
                                    </th>


                                    <th>
                                        Description
                                    </th>


                                    <th>
                                        Amount
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

                                expenses.map((item,index)=>(


                                    <tr key={item.id}>


                                        <td>
                                            {index+1}
                                        </td>


                                        <td>
                                            {item.category}
                                        </td>


                                        <td>
                                            {item.vehicle}
                                        </td>


                                        <td>
                                            {item.description}
                                        </td>


                                        <td>
                                            ₹ {item.amount}
                                        </td>


                                        <td>
                                            {item.date}
                                        </td>


                                        <td>

                                            <span className="expense-status">

                                                {item.status}

                                            </span>


                                        </td>


                                        <td>


                                            <button

                                                className="delete-btn"

                                                onClick={()=>deleteExpense(item.id)}

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