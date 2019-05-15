import React from 'react'


export default function Tab({ index, label, active, onClick }) {
    return (
        <li className={`btn btn-primary nav-item${active ? ' active': ''}`} onClick={() => onClick(index)}>{label}</li>
    );
};