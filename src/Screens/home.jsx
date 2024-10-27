import React from 'react';
import { Header, Section, Footer, Testimonys} from "../Screens/index.js";


const Home = () => {
    return (
        <>
            <Header />
            <Section />
            <Testimonys />
            <div className="space" style={{ height: "100px" }}></div>
            <Footer />
        </>
    );
}

export default Home;