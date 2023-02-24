import React,{useState} from 'react'
import { cardData } from './CardData';

const StakeCard = () => {
  const [data,setData]=useState(cardData);
  const mainPool=()=>{
    const finalData=cardData.filter((value)=>{
        console.log(value);
        return value;
    })
    // setData(finalData);
}
  const sidePool=(categoryItem)=>{
    const finalData=cardData.filter((value)=>{
      // console.log(value);
        return value.category===categoryItem;
    })
    // setData(finalData);
  }
  const bnbPool=(categoryItem)=>{
    const finalData=cardData.filter((value)=>{
        return value.category===categoryItem;
    })
    // setData(finalData);
}
  const magpiePool=(categoryItem)=>{
    const finalData=cardData.filter((value)=>{
      // console.log(value);
        return value.category===categoryItem;
    })
    // setData(finalData);
  }
  return (
    <div className="">
        <div className="Stake_page_tab_head display_flex">
          <h3 className='my-3'>LIQUIDITY POOLS</h3>
          <img src="/images/Vector 113.png" alt="" />
        </div>
        <div className="Stake_page_tab">
            <h4 onClick={mainPool("Main Pool")}>Main Pool</h4>
            <h4 onClick={sidePool("Side Pool")}>Side Pool</h4>
            <h4 onClick={bnbPool("BNB Pools")}>BNB Pools</h4>
            <h4 onClick={magpiePool("Magpie LP")}>Magpie LP</h4>
            <button>!USD</button>
        </div>
            {
                data.map((obj,index)=>{
                    let {company_img,company_name,company_desc,month_percent,month,tvl_dollar,tvl,company_deposit,deposit,dollar_reward,reward}=obj;
                    console.log(obj);
                    return (
                        <div className='card_content' key={index}>
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
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        </div>
                    )
                })
            }
    </div>
  )
}

export default StakeCard