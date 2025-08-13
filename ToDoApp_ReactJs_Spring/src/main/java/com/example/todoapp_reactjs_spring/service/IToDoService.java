package com.example.todoapp_reactjs_spring.service;

import com.example.todoapp_reactjs_spring.model.ToDos;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface IToDoService {
    List<ToDos> findAll();
    ToDos addNewToDo(ToDos toDos);
    ToDos updateToDo(ToDos toDos);
    void deleteToDo(Long id);
}
