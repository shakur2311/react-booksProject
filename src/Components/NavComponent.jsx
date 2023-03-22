import React from 'react';
import {Link} from 'react-router-dom';

const NavComponent = () => {
    return (
        <div className='navigation d-flex justify-content-center'>
            <Link to={"/"}>Home</Link>
            <Link to={"/create"}>Create</Link>
        </div>
    );
}

export default NavComponent;
