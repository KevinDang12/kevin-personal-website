import React from 'react';
import './LoadingPage.css';
import {Oval} from 'react-loader-spinner';

/**
 * The Loading Page Component
 * @returns The React Loading Component
 */
export default function LoadingPage() {
    return (
        <div className='LoadPage'>
            <Oval
                height={100}
                width={100}
                color="#FFFFFF"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#000000"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    );
}
