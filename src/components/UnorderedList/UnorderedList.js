import React from 'react';

const UnorderedList = ({ className, listObject }) => {
    return (
        <ul className={className}>
           {listObject.map((list, index) => (
               <li key={index}>{list.name}</li>
           ))} 
        </ul>
    );
};

export default UnorderedList;