import React, {useState} from 'react';

const ItemCount = () => {
    const [contador, setcontador] = useState(0);



    return (
        <div>
            <button className='btn btn-primary'>+</button>
            <span>{contador}</span>
            <button className='btn btn-danger'>-</button>
        </div>
    );
}

export default ItemCount;

