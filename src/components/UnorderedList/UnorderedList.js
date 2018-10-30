import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

const UnorderedList = ({ className, listObject }) => {
    return (
        <ul className={className}>
           {listObject.map((list, index) => (
               <li key={index}><Link style={{ color: 'white' }} to={routes.ABOUT}>{list.name}</Link></li>
           ))} 
        </ul>
    );
};

export default UnorderedList;