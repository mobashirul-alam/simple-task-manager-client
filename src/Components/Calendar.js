import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <h1 className='text-center text-2xl font-medium my-4'>Calendar</h1>
            <div className='flex justify-center'>
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>Selected Date: <span className='font-semibold'>{format(date, 'PP')}</span>.</p>
                </div>
            </div>
        </div>
    );
};

export default Calendar;