//import { ToDoList } from "../../src/index.mjs";

// TodoList
/*
describe ("ToDoList", () =→ {
    let lista;

    beforeEach(() =→ {
        lista = new ToDoList();
    });
});

*/
//const ToDoList = require("../../src/index.mjs");
import ToDoList from '../../src/index.mjs'
describe("La clase TodoList", () => {
    it("debe ser una clase", () => {
        expect( typeof ToDoList.prototype.constructor).toBe("function");
    });

    it("Debe tener implementado el metodo getTodos()", () => {
        const lista = new ToDoList();
        expect(lista.getTodos).toBeDefined();
    });
    it("Debe tener implementado el metodo addTodo()", () => {
        const lista = new ToDoList();
        expect(lista.addTodo).toBeDefined();
    });
    it("Debe tener implementado el metodo deleteTodo()", () => {
        const lista = new ToDoList();
        expect(lista.deleteTodo).toBeDefined();
    });
    it("el metodo getTodos() debe retornar un array", ()=> {
        const lista = new ToDoList;
        expect(Array.isArray(lista.getTodos())).toBeTrue();
    });
    it("El metodo addTodo() debe agregar un nuevo elemento", ()=> {
        const lista = new ToDoList;
        lista.addTodo("Hacer la homework de la clase de hoy");
        expect(lista.getTodos()).toContain("Hacer la HW de la clase de hoy");
    })
    it("El metodo deleteTodo() debe eliminar la ultima tarea", ()=> {
        const lista = new ToDoList();
        lista.addTodo("A");
        lista.addTodo("B");
        lista.addTodo("C");
        lista.deleteTodo();
        expect(lista.getTodos()).toContain("A");
        expect(lista.getTodos()).toContain("B");
        expect(lista.getTodos()).not.toContain("C");
    });
});