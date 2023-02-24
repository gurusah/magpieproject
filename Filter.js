import React, { useState } from 'react'
import { Data } from './Alldata';
const Filter = () => {
    const [images,setImages]=useState(Data);
    const allItem=()=>{
        const finalData=Data.filter((value)=>{
            console.log(value);
            return value;
        })
        setImages(finalData);
    }
    const onlyCar=(categoryItem)=>{
        const finalData=Data.filter((value)=>{
            return value.category===categoryItem;
        })
        setImages(finalData);
    }
    const onlyBike=(categoryItem)=>{
        const finalData=Data.filter((value)=>{
            return value.category===categoryItem;
        })
        setImages(finalData);
    }
    const onlyFruit=(categoryItem)=>{
        const finalData=Data.filter((value)=>{
            return value.category===categoryItem;
        })
        setImages(finalData);
    }
  return (
    <div className="container">
        <div className="">
            <button onClick={allItem} className='btn btn-primary'>All</button>
            <button onClick={()=>{onlyCar("car")}} className='btn btn-secondary'>Car</button>
            <button onClick={()=>{onlyBike("bike")}} className='btn btn-secondary'>Bike</button>
            <button onClick={()=>{onlyFruit("fruit")}} className='btn btn-secondary'>Fruit</button>
        </div>
        <div className=' filterable_gallery'>
            {
                images.map((obj)=>{
                    let {imageUrl}=obj;
                    return (
                        <div className="">
                            <img src={imageUrl} alt="" />
                        </div>
                        
                    )
                })
            }
        </div>
    </div>
  )
}

export default Filter