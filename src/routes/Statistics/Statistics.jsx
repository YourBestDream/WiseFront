import Card from '../../components/card_info/card_info';
import CardTags from '../../components/card_tags/card_tags';
import CardGraph from '../../components/card_graph/card_graph';
import CardHelp from '../../components/card_help/card_help';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Statistics.css';

export default function Statistics() {
    const [data,setData] = useState(null)

    useEffect(() => {
        console.log("Fetching data...")
        const fetchSummary = async () => {
          try {
            const res = await axios.get('/results/stats')
            setData(res.data)
            console.log(res.data)
          } catch (error) {
            console.error("Error fetching data:", error)
          }
        }
      
        fetchSummary()
      }, [])
    

    return (
        <>
        <div className='stats'>
            <div className='stats-header'>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="30" viewBox="0 0 13 30" fill="none">
                <path d="M12.5875 0.476675C12.0374 -0.158892 11.1457 -0.158892 10.5956 0.476675L1.23754 11.2905C-0.412068 13.1967 -0.412576 16.287 1.23639 18.1939L10.4901 28.8953C11.0401 29.531 11.9319 29.531 12.4819 28.8953C13.0319 28.2598 13.0319 27.2292 12.4819 26.5937L3.22577 15.8979C2.67575 15.2622 2.67575 14.2318 3.22577 13.5963L12.5875 2.7783C13.1375 2.14272 13.1375 1.11226 12.5875 0.476675Z" fill="#2F4846"/>
                </svg>
                <p>How to Download and Install Minecraft Mods (2023)</p>
            </div>
            <div className='card-box'>
                <div className='cards-wrapper'>
                    <div className='pair'>
                        { data ?
                        <Card text = {data["1_paragraph_summary"]} />
                        :
                        <Card text = "Please wait while your request is being processed" />
                        }
                        <CardTags tags = {[{tag: "Minecraft"}, {tag: "Mod"}, {tag: "Modding"}, {tag: "Klein"}, {tag: "Nazi"}, {tag: "Slavery"}, {tag: "LMLMLMLM"}, {tag: "Coinflip"}, {tag: "JJK"}]}/>
                    </div>
                    <div className='pair'>
                        <CardGraph />
                        { data ?
                        <CardHelp 
                        text = {data["similar_video_idea_summary"]}
                        tags = {data["tags"]}/>
                        :
                        <CardHelp 
                        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. " 
                        tags = {["motivation","demotivation"]}/>
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}