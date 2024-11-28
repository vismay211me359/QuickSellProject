import React, { useState } from 'react';
import './NavBar.css';
import displayIcon from '../../assets/images/icons/Display.svg';
import downIcon from '../../assets/images/icons/down.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setGrouping } from '../../context/GroupingSlice';
import { setSort } from '../../context/SortSlice';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const grouping = useSelector((state) => state.grouping.grouping);
    const ordering = useSelector((state) => state.sorting.sortBy);


    return (
        <nav className="navbar">
            <div className="navbar-container">
                <button
                    className="dropdown-button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <div className='displayicon'>
                        <img src={displayIcon} alt="Display Icon" className="icon" />
                    </div>
                    <div className='buttonicon'>
                        <span className="dropdown-text">Display</span>
                        <img src={downIcon} alt="Down Arrow Icon" className="icon" />
                    </div>
                </button>
                {isDropdownOpen && (
                    <div className="dropdown-container">
                        <div className="dropdown-option">
                            <span>Grouping:</span>
                            <select
                                value={grouping}
                                onChange={(e) => { dispatch(setGrouping(e.target.value)) }}
                                className="dropdown-select"
                            >
                                <option value="Status">Status</option>
                                <option value="User">User</option>
                                <option value="Priority">Priority</option>
                            </select>
                        </div>
                        <div className="dropdown-option">
                            <span>Ordering:</span>
                            <select
                                value={ordering}
                                onChange={(e) => { dispatch(setSort(e.target.value)) }}
                                className="dropdown-select"
                            >
                                <option value="Priority">Priority</option>
                                <option value="Title">Title</option>
                            </select>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

