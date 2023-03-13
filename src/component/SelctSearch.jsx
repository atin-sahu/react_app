
import React from 'react'
import { useState } from 'react';
import Select from 'react-select';


export const SelectSearch = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div>
            <h1>select and search</h1>

            <div>
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
            </div>
        </div>
    )

}