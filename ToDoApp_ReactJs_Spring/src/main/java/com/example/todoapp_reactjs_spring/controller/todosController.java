package com.example.todoapp_reactjs_spring.controller;

import com.example.todoapp_reactjs_spring.model.ToDos;
import com.example.todoapp_reactjs_spring.service.IToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000/", allowedHeaders = "*")
public class todosController {
    @Autowired
    IToDoService toDoService;

    @GetMapping
    public List<ToDos> getListToDos(){
        List<ToDos> list = toDoService.findAll();
        return list;
    }

    @PutMapping
    public ToDos update(@RequestBody ToDos toDos){
        return toDoService.updateToDo(toDos);
    }

    @PostMapping
    public ToDos addNew(@RequestBody ToDos todos){
        return toDoService.addNewToDo(todos);
    }

    @DeleteMapping
    public void delete(@RequestParam Long id){
        toDoService.deleteToDo(id);
    }
}
