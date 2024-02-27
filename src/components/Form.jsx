import { Button, Paper, TextField } from "@mui/material"
import { useState } from "react"

export default function Form({ addTodo }) {
    const [text, setText] = useState("")
    const [id, setId] = useState(0)

    const todoCreate = (text) => {
      const todoObj = {text: text, id: id}
      setId(id + 1)
      addTodo(todoObj)
    }
 
    const handleSubmit = (event) => {
      event.preventDefault()
      setText("")
    }


  return (
    <Paper elevation={3} style={{ padding: "1em" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center" }}> 
            <TextField id="outlined-basic" label="Tarefa" variant="outlined" value={text} b onChange={(e) => setText(e.target.value)} fullWidth/>
            <Button variant="text" type="submit" style={{color: "grey", fontWeight: "bold"}} onClick={() => todoCreate(text)}>Add</Button>
        </form>
    </Paper>
  )
}
