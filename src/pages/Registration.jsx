import React from "react";
import RegisterForm from '../Components/Registrations/RegisterForm';
import Banner from '../Components/Registrations/Banner';

export default function Registration() {
    return (
        <div style={{ display: 'flex',maxHeight:'fit-content', backgroundColor:'green'}}>
            <Banner />
            <RegisterForm />

        </div>
    );
}