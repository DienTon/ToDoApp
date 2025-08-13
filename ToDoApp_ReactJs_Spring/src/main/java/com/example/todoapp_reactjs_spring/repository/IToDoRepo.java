package com.example.todoapp_reactjs_spring.repository;

import com.example.todoapp_reactjs_spring.model.ToDos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IToDoRepo extends JpaRepository<ToDos, Long> {
}
