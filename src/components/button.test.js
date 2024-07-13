import React from 'react'
import {render,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './button';
test('Render button with Label'()=>{
    const{getByText}=render( 
        <Button label="Click Me"/>
        const buttonElement = getByText('Click Me');
        except(buttonElement).toBeInTheDocument();
})