import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {

    let activeStyle = {
        textDecoration: "underline",
        color: "skyblue"
    };
    let activeHomeStyle = {
        color: "skyblue"
    };

    return (
        <div className='bg-gray-700 text-white text-lg py-4'>
            <nav className='flex justify-around'>
                <div>
                    <NavLink
                        to='/home'
                        style={({ isActive }) =>
                            isActive ? activeHomeStyle : undefined
                        }
                    >
                        Simple Task Manager
                    </NavLink>
                </div>
                <div className=''>
                    <NavLink
                        to='/completedTasks'
                        className='mx-4'
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Completed Tasks
                    </NavLink>
                    <NavLink
                        to='/todo'
                        className='mx-4'
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        To-Do
                    </NavLink>
                    <NavLink
                        to='/calendar'
                        className='mx-4'
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Calendar
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;