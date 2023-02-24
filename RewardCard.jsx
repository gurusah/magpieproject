import React from 'react'

const RewardCard = (props) => {
    let {dollar,title,imgeUrl}=props;
    return (
        <div className="deposit_reward_div">
            <div className="text">
                <h3 className='price'>{dollar}</h3>
                <p>{title}</p>
            </div>
            <div className="image_holder">
                <img src={imgeUrl} alt="" />
            </div>
        </div>
    )
}

export default RewardCard