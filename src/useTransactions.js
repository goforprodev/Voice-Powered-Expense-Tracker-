import {useContext} from "react"
import {ExpenseTrackerContext} from "./context/context"

import {expenseCategories, incomeCategories, resetCategories} from "./constants/categories";

//We are making a custom hook and a custom hook is simply an arrow function that starts with use--()
//basically the criteria for something to be a hook is that it must start with use()

const useTransactions = (title) => {
    resetCategories()
    const {transactions} = useContext(ExpenseTrackerContext);
    const transactionsPerType = transactions.filter((t) => t.type === title)
    const total = transactionsPerType.reduce((acc,currentVal) =>  {
        return acc + currentVal
    } ,0)
    const categories = title === 'Income' ? incomeCategories : expenseCategories

    console.log({transactionsPerType,total,categories})

    transactionsPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category  )

        if(category) category.amount += t.amount
    });

    //we want to filter the categories that are greater than zero
    const filteredCategories = categories.filter((c) => c.amount >  0)

    const chartData = {
        datasets:[
            {
                data:filteredCategories.map((fc) => fc.amount),
                backgroundColor:filteredCategories.map((fc) => fc.color)
            }
        ],
        labels:filteredCategories.map((fc) => fc.type)
    }



    return {filteredCategories,chartData,total}

}

export default useTransactions