import React from 'react';

export default function Checkbox({ label, disabled, checked, onChange }) {
    return (
        <div>
            <input type="checkbox" id={label} checked={checked} disabled={disabled} onChange={() => onChange(!checked)} />
            <label htmlFor={label}>{label}</label>
        </div>
    );
}
