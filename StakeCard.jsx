import React from 'react'
import { cardData } from './CardData';

const StakeCard = () => {
    return (
        <div className="">
            {
                cardData.map((obj,index)=>{
                    let {company_img,company_name,company_desc,month_percent,month,tvl_dollar,tvl,company_deposit,deposit,dollar_reward,reward,bgColor}=obj;
                    console.log(obj);
                    return (
                        <div className={bgColor}  key={index}>
                            <div className="card_content">
                                <div className="card">
                                    <div className="image_holder">
                                        <img src={company_img} alt="" />
                                    </div>
                                    <div className="">
                                        <h4>{company_name}</h4>
                                        <p>{company_desc}</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="">
                                        <span>{month_percent}</span><img src="/images/Vector.png" alt="" />
                                        <p>{month}</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="">
                                        <span>{tvl_dollar}</span>
                                        <p>{tvl}</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="">
                                        <span>{company_deposit}</span>
                                        <p>{deposit}</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="">
                                        <span>{dollar_reward}</span>
                                        <p>{reward}</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StakeCard