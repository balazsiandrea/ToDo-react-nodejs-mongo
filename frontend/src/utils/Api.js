import axios from 'axios'; 

const baseUrl = 'http://localhost:5000'

const getAll = (setToDo) => {
    axios.get(baseUrl)
    .then((response) => {
        if (response.status ===  200 ) {
            setToDo(response.data)
        }  
        else {
            console.log('No data found')
            setToDo([])
        }
    
    })
    .catch((err) => console.log(err))

}

const addToDo = (text, setText, setToDo) => {

    axios.post(`${baseUrl}/save`, {text})
    .then((response) => {
            console.log(response)
            setText("")
            getAll(setToDo)
        
    })
    .catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo) => {
    axios.delete(`${baseUrl}/delete`,  {data: {_id}})
    .then((response) => {
        console.log(response);
        getAll(setToDo);
})

    .catch((err) => console.log(err))};

export { getAll, addToDo, deleteToDo}