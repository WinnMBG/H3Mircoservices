import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";

const Home = ({logged, setLogged}) => {
    return (
        <div className="home-page">
           <Header logged={logged} setLogged={setLogged}/>
           <Form/>
        </div>
    );
};

export default Home;