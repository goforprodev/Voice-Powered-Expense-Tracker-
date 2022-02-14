import React from "react"
import {Card,CardHeader,CardContent,Typography} from "@material-ui/core";
import useStyles from "./styles"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
//import custom-hook
import useTransactions from "../../useTransactions"

ChartJS.register(ArcElement, Tooltip, Legend);


//todo: figure out how to integrate chartjs with new version react
const Details = ({title}) => {
    const {chartData,total}  = useTransactions(title)
    console.log({total,chartData})
    const classes = useStyles()
    return (
        <div>
            <Card className={title === 'Income' ? classes.income : classes.expense}>
                <CardHeader title={title}/>
                <CardContent>
                    <Typography variant={"h5"}>{total}</Typography>
                    <Doughnut data={chartData} />
                </CardContent>
            </Card>
        </div>
    )
}

export default Details