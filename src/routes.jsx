import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import BookInfoComponent from './Components/BookInfoComponent';
import CreateComponent from './Components/CreateComponent';
import HomeComponent from './Components/HomeComponent';
import IndexLayout from './Layouts/indexLayout';


export const router = createBrowserRouter([
    {
        path:"/",
        element: <IndexLayout/>,
        children: [
            {
                path:"",
                element: <HomeComponent/>
            },
            {
                path:"create",
                element: <CreateComponent/>
            },
            {
                path:"info/:titulo",
                element: <BookInfoComponent/>
            }
        ]
    }
])

