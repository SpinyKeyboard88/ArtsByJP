//import { useState } from 'react'
import artsbyjpLogo from '../assets/artsbyjpLogo.png'
import '../css/App.css'
import '../css/Index.css'

function Home() {
    return (
        <>

            <div className="px-3 py-3 my-3 text-center">
                <img src={artsbyjpLogo} className="logo" alt="Arts By JP logo" />
            </div >
            <div className="px-3 py-3 my-3 text-center">
                <h1>Arts By JP</h1>
            </div >

            <div className="container text-center">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-4 align-items-center rounded-3 border shadow-lg">
                    <p>Proudly providing high quality products and services to the San Antonio and Rio Grande Valley area since 2016. </p>

                </div>
            </div>



            <div className="container mt-5 text-center mb-5">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <h3>Email</h3>
                            <p>juan.porraz@artsbyjp.com</p>
                        </div>
                        <div className="row">
                            <h3>Phone</h3>
                            <p>(956)-601-6667</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-1 text-center">

                <div className="d-flex align-items-center justify-content-center">
                    <div className="flex-fill" >
                        <a href="https://www.instagram.com/jpkreates24/">
                            <i className="bi-instagram fs-1 instagram-color" alt="Instagram logo"></i>
                            <h3 id="instagram-name">Instagram</h3>
                        </a>
                    </div>

                    <div className="flex-fill" >
                        <a href="https://www.facebook.com/artsbyjp/">
                            <i className="bi-facebook fs-1" alt="Facebook logo"></i>
                            <h3 id="facebook-name">Facebook</h3>
                        </a>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Home
