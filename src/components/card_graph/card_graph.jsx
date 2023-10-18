import {CartesianGrid, XAxis, YAxis, ResponsiveContainer,AreaChart,Area,Tooltip} from "recharts";
import "./card_graph.css"

const data = [
    { day: "1", views: getRandomInteger(100, 2100) },
    { day: "2", views: getRandomInteger(100, 2100) },
    { day: "3", views: getRandomInteger(100, 2100) },
    { day: "4", views: getRandomInteger(100, 2100) },
    { day: "5", views: getRandomInteger(100, 2100) },
    { day: "6", views: getRandomInteger(100, 2100) },
    { day: "7", views: getRandomInteger(100, 2100) },
    { day: "8", views: getRandomInteger(100, 2100) },
    { day: "9", views: getRandomInteger(100, 2100) },
    { day: "10", views: getRandomInteger(100, 2100) },
    { day: "11", views: getRandomInteger(100, 2100) },
    { day: "12", views: getRandomInteger(100, 2100) },
    { day: "13", views: getRandomInteger(100, 2100) },
    { day: "14", views: getRandomInteger(100, 2100) },
    { day: "15", views: getRandomInteger(100, 2100) },
    { day: "16", views: getRandomInteger(100, 2100) },
    { day: "17", views: getRandomInteger(100, 2100) },
    { day: "18", views: getRandomInteger(100, 2100) },
    { day: "19", views: getRandomInteger(100, 2100) },
    { day: "20", views: getRandomInteger(100, 2100) },
    { day: "21", views: getRandomInteger(100, 2100) },
    { day: "22", views: getRandomInteger(100, 2100) },
    { day: "23", views: getRandomInteger(100, 2100) },
    { day: "24", views: getRandomInteger(100, 2100) },
    { day: "25", views: getRandomInteger(100, 2100) },
    { day: "26", views: getRandomInteger(100, 2100) },
    { day: "27", views: getRandomInteger(100, 2100) },
    { day: "28", views: getRandomInteger(100, 2100) },
    { day: "29", views: getRandomInteger(100, 2100) },
    { day: "30", views: getRandomInteger(100, 2100) },
  ];
  
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

export default function Card_Graph() {
    return(
        <>
        <div className='card-container'>
            <div className = 'card'>
                <div className='header'>
                    {"Views"}
                </div>
                <div className='graph'>
                    <ResponsiveContainer width="100%" height={200}>
                        <AreaChart data={data}>
                            <Area dataKey="views" type="monotone" stroke="#8d6ccf" dot={{fill:"#8d6ccf"}} fill = "#8d6ccf" fillOpacity={0.9} strokeWidth={2}/>
                            <CartesianGrid stroke="#517C77" strokeWidth={0.69}/>
                            <XAxis dataKey="day" stroke="#517C77" fontsize={8.276}/>
                            <YAxis dataKey="views" stroke="#517C77"/>
                            <Tooltip/>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
        </>
    )
}