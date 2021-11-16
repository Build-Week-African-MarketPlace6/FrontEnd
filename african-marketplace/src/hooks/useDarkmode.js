import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useDarkmode = () => {

    const [ darkmode, setDarkmode ] = useLocalStorage( false );

    // useEffect( () => {

    //     console.log("darkmode:", darkmode);

    //     if( darkmode === true ) {
    //         document.body.classList.remove(" dark-mode ");

    //     } else {
    //         document.body.classList.add(" dark-mode");
    //     }
    // }, [ darkmode ]);

    return [ darkmode, setDarkmode ];
} 

export default useDarkmode;