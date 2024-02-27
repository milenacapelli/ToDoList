import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'; 
import { Paper } from "@mui/material";
import EditTodoDialog from "./EditTodoDialog";
import EditIcon from '@mui/icons-material/Edit';

export default function TodoItem({todo, deleteTodo, editTodo}) {
  const [openDialog, setOpenDialog] = React.useState(false)

  const dialogHandler = () => {
    setOpenDialog(!openDialog)
  }

  return (
    <>
      <EditTodoDialog editTodo={editTodo} open={openDialog} dialogHandler={dialogHandler} todo={todo}/>
      <Paper elevation={2} style={{ padding: "0.5em 0em" }}>
        <ListItem
          secondaryAction={
            <>
              <IconButton edge="end" aria-label="edit" onClick={() => setOpenDialog(true)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                <DeleteOutlineIcon />
              </IconButton>
            </>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText primary={todo.text} />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}
