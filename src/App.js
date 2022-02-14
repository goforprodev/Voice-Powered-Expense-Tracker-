import React from "react"
import {Grid,Typography} from "@material-ui/core"
//hooks
import useStyles from "./styles"
//components
import Details from "./components/Details/Details"
import Main from "./components/Main/Main"

const App = () => {
    const classes = useStyles()
    return(
        <div>
                {/*<Typography variant={"h3"} style={{textAlign:'center'}}>Track Your Expenses</Typography>*/}
            <Grid className={classes.grid} container spacing={0} alignItems={"center"} justifyContent={"center"} style={{height:'100vh'}}>
                <Grid item xs={12} sm={4}>
                    <Details title={"Income"}/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Details title={"Expense"}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default App