import Layout from "../components/Layout";
import "../styles/reports.css";


export default function Reports(){


    const reportData = [

        {
            title:"Total Vehicles",
            value:"120"
        },

        {
            title:"Total Drivers",
            value:"85"
        },

        {
            title:"Completed Trips",
            value:"240"
        },

        {
            title:"Total Expenses",
            value:"₹ 1,25,000"
        }

    ];



    const monthlyExpenses = [

        {
            month:"January",
            amount:"25000"
        },

        {
            month:"February",
            amount:"32000"
        },

        {
            month:"March",
            amount:"28000"
        }

    ];



    return(


        <Layout>


            <div className="reports-page">



                <div className="page-header">


                    <h1>
                        Reports
                    </h1>


                    <p>
                        View transport operations summary
                    </p>


                </div>






                {/* SUMMARY CARDS */}



                <div className="report-cards">


                {
                    reportData.map((item,index)=>(


                        <div 
                            className="report-card"
                            key={index}
                        >


                            <h3>
                                {item.title}
                            </h3>


                            <h2>
                                {item.value}
                            </h2>


                        </div>


                    ))
                }


                </div>







                {/* REPORT TABLE */}



                <div className="report-section">


                    <div className="section-header">


                        <h2>
                            Monthly Expense Report
                        </h2>



                        <button>
                            Export Report
                        </button>


                    </div>





                    <table>


                        <thead>

                            <tr>

                                <th>
                                    Month
                                </th>

                                <th>
                                    Expense Amount
                                </th>


                            </tr>


                        </thead>




                        <tbody>


                        {
                            monthlyExpenses.map((item,index)=>(


                                <tr key={index}>


                                    <td>
                                        {item.month}
                                    </td>


                                    <td>
                                        ₹ {item.amount}
                                    </td>


                                </tr>


                            ))
                        }


                        </tbody>



                    </table>



                </div>








                {/* OPERATION REPORT */}





                <div className="report-section">


                    <h2>
                        Operation Status
                    </h2>



                    <div className="operation-grid">


                        <div>

                            <h3>
                                Active Vehicles
                            </h3>

                            <p>
                                95
                            </p>

                        </div>



                        <div>

                            <h3>
                                Vehicles Under Maintenance
                            </h3>

                            <p>
                                15
                            </p>

                        </div>




                        <div>

                            <h3>
                                Scheduled Trips
                            </h3>

                            <p>
                                45
                            </p>

                        </div>




                    </div>



                </div>




            </div>



        </Layout>


    );

}