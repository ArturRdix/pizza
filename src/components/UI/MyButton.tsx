import { FC } from 'react';
import './MyButton.scss'

interface MyButtonProps {
    value: string;
    disabled?: boolean;
    onClick?: () => void;
    width?:string;
    height?:string;
}

const MyButton:FC<MyButtonProps> = ({value,disabled,onClick,width,height}) => {
    return (
        <button style={{width:width,height:height}} onClick={onClick} disabled={disabled} className='my-button'>{value}</button>
    );
}

export default MyButton;