import React,{useState} from 'react'
import { cardData } from './CardData';
import RewardCard from './RewardCard';
import StakeCard from './StakeCard'

const Stake = () => {
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
    <div className='stake_page'>
        <div className="container">
            <div className="stake_page_container">
              <div className="display_flex" style={{alignItems:"baseline"}}>
                  <div className="reward_deposit_head">
                    <h3>Stake Funds</h3>
                    <p>Change Protocol</p>
                    <div className="reward_deposit_head_btn display_flex">
                        <img src="images/wombat.png" alt="" />
                        <p style={{border:"none"}}>Womcat Exchange</p>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                  <div className="">
                    <button className='btn' style={{borderRadius:"6px"}}>Purchase Insurance</button>
                  </div>
              </div>
              <div className="social_media">
                <div className="twitter"><img src="/images/twitter.png" alt="" /></div>
                <div className="play"><img src="/images/play.png" alt="" /></div>
                <div className="wave"><img src="/images/wave.png" alt="" /></div>
              </div>
              <div className="stake_page_section">
                <RewardCard dollar="$0.00" title="Your Deposit" imgeUrl="/images/rewards.png" />
                <RewardCard dollar="$0.00" title="Your Rewards" imgeUrl="/images/rewards.png" />
                <RewardCard dollar="$0.00" title="Your Deposit" imgeUrl="/images/rewards.png" />
              </div>
                <div className="Stake_page_tab_head display_flex">
                    <h3 className='my-3'>LIQUIDITY POOLS</h3>
                    <img src="/images/Vector 113.png" alt="" />
                </div>
                <div className="Stake_page_tab">
                    <div className="display_flex">
                      <h4 onClick={mainPool("Main Pool")}>Main Pool</h4>
                      <h4 onClick={sidePool("Side Pool")}>Side Pool</h4>
                      <h4 onClick={bnbPool("BNB Pools")}>BNB Pools</h4>
                      <h4 onClick={magpiePool("Magpie LP")}>Magpie LP</h4>
                      <button className='btn btn_radius'>!USD</button>
                    </div>
                    <div className="setting_image">
                      <img src="/images/setting.png" alt="" />
                    </div>
                </div>
                <StakeCard />
            </div>
        </div>
    </div>
  )
}

export default Stake