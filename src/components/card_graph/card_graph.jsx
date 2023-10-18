import {Line,LineChart,CartesianGrid, XAxis, YAxis} from "recharts";
import "./card_graph.css"

const data = [
    {day:"1", views: 100},
    {day:"2", views: 200},
    {day:"3", views: 300},
    {day:"4", views: 400},
    {day:"5", views: 200},
    {day:"6", views: 300},
    {day:"7", views: 400},
    {day:"8", views: 500},
    {day:"9", views: 50},
    {day:"10", views: 100},
    {day:"11", views: 200},
    {day:"12", views: 300},
    {day:"13", views: 400},
    {day:"14", views: 500},
    {day:"15", views: 600},
    {day:"16", views: 700},
    {day:"17", views: 800},
    {day:"18", views: 900},
    {day:"19", views: 1000},
    {day:"20", views: 1100},
    {day:"21", views: 1200},
    {day:"22", views: 1300},
    {day:"23", views: 1400},
    {day:"24", views: 1500},
    {day:"25", views: 1600},
    {day:"26", views: 1700},
    {day:"27", views: 1800},
    {day:"28", views: 1900},
    {day:"29", views: 2000},
    {day:"30", views: 2100},
]

export default function Card_Graph() {
    return(
        <>
        <div className='card-container'>
            <div className = 'card'>
                <div className='header'>
                    {"Views"}
                </div>
                <div className='graph'>
                    <LineChart width={400} height={200} data={data}>
                        <Line type="monotone" dataKey="views" stroke="#8d6ccf" dot={{fill: "#8d6ccf"}} fill="#8d6ccf" strokeWidth={2}/>
                        <CartesianGrid stroke="#517C77" strokeWidth={0.69}/>
                        <XAxis dataKey="day" stroke="#517C77" fontsize={8.276}/>
                        <YAxis dataKey="views" stroke="#517C77"/>
                    </LineChart>
                </div>
            </div>
        </div>
        </>
    )
}