/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("addTaskBtn").addEventListener("click", function() {
    addTask(); //  Llama a la función para añadir la tarea cuando se hace clic en el botón
  });

  document.getElementById("taskInput").addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
      addTask(); // Llama a la función para añadir la tarea cuando se presiona Enter
    }
  });

  //Función para añadir una tarea
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim(); //Elimina espacios al principio y al final
    if (taskText === "") return; //no hacer nada si el input esta vacido

    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");

    //Añade un ícono de basura y el texto de la tarea
    newTask.innerHTML = `<span> <button class="delete-btn"><i class="fa fa-trash"></i>
         </button> ${taskText}</span>`;

    //Añade la funcionalidad de eliminar la tarea
    newTask.querySelector(".delete-btn").addEventListener("click", function() {
      taskList.removeChild(newTask); // Elimina la tarea cuando se hace clic en el botón
    });

    taskList.appendChild(newTask); //Añade la nueva tarea a la lista

    taskInput.value = ""; //Limpia el input después de añadir la tarea
  }
};
