package com.example.todoapp_reactjs_spring.service;

import com.example.todoapp_reactjs_spring.model.ToDos;
import com.example.todoapp_reactjs_spring.repository.IToDoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToDoService implements IToDoService{
    @Autowired
    IToDoRepo toDoRepo;
    @Override
    public List<ToDos> findAll() {
        return toDoRepo.findAll();
    }

    @Override
    public ToDos addNewToDo(ToDos toDos) {
        return toDoRepo.save(toDos);
    }

    @Override
    public ToDos updateToDo(ToDos toDos) {
        return toDoRepo.save(toDos);
    }

    @Override
    public void deleteToDo(Long id) {
        toDoRepo.deleteById(id);
    }
}
