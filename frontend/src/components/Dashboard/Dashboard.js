import React, { useEffect, useState } from 'react'
import Navbar from '../NavBar'
import axios from 'axios';

const Dashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setIsLoggedIn(true);
        }
    })

    const [meds, setMeds] = useState([]);

    function openRazorPayDialog(data) {
        const options = {
            key: "rzp_test_WdLHPKaihnEYnG",
            amount: data.amount,
            currency: data.currency,
            name: "Health Edit",
            order_id: data.id,
            description: "Buy",
            handler: function (response) {
                console.log(response);
                axios.post('http://localhost:5000/verify', { response: response })
                    .then((obj) => {
                        console.log(obj);
                        if (obj.data.signatureIsValid) {
                            console.log("Payment successful");
                        } else {
                            console.log("Some error occurred")
                        }

                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
            theme: {
                color: "#3399cc"
            }
        };

        const razorPay = new window.Razorpay(options);
        razorPay.open();
    }

    const handlePayment = (amount) => {
        axios.post('http://localhost:5000/singleorder', { amount })
            .then((obj) => {
                if (obj.data.order) {
                    openRazorPayDialog(obj.data.order);
                    // console.log(obj);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        axios.get('http://localhost:5000/getallmeds')
            .then((obj) => {
                setMeds(obj.data.medsArr);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <Navbar />
            {isLoggedIn ? (
                <>
                    {meds && (
                        <>
                            <div className='d-flex flex-wrap'>
                                {meds.map((med) => {
                                    return (
                                        <>
                                            <div className="card" style={{ width: "18rem" }}>
                                                <img className="card-img-top" src={med.image} alt="Card image cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Name: {med.name}</h5>
                                                    <p className="card-text">{med.description}</p>
                                                    <p className="card-text">{med.price}</p>
                                                    <button onClick={() => {
                                                        handlePayment(med.price);
                                                    }} className="btn btn-primary">Buy Now</button>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })}
                            </div>
                        </>
                    )}
                </>
            ) : (
                <>
                    <div style={{backgroundImage:"https://th.bing.com/th/id/OIP.GRBfm871ULBa1IRWe1smgAHaE8?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",backgroundSize:"cover"}}></div>
                </>
            )}
        </div>
    )
}

export default Dashboard
