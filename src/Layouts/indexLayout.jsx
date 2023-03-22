import React from 'react';
import NavComponent from '../Components/NavComponent'
import {Outlet} from 'react-router-dom'

const IndexLayout = () => {
    return (
        <div>
            <NavComponent/>
            <div className='p-3'>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default IndexLayout;
