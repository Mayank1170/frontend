import React from 'react';

interface SearchModalProps{
    visible:boolean;
    onClick:()=> void;
}


const SearchModal: React.FC<SearchModalProps> = ({visible, onClick}) => {
    const handleOnClose = () => {
        onClick()
    }

    if(!visible) return null;
    return (
        <div onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm h-full flex justify-center items-center text-black">
            <div className="bg-[#202020] p-2 rounded">
                <div className='text-white font-bold'>Manage Balances</div>
            </div>
        </div>
    )
}

export default SearchModal;