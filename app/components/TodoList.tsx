import React from "react";
import { Todo } from "@/types/todo";
// Jika Anda punya komponen TodoItem, import di sini:
// import TodoItem from './TodoItem';

type TodoListProps = {
    todos: Todo[];
    onToggleTodo: (id: number) => void;
    onDeleteTodo: (id: number) => void;
};

export default function TodoList({
    todos,
    onToggleTodo,
    onDeleteTodo,
}: TodoListProps) {
    return (
        <div className="space-y-2 mt-4">
            {todos.length === 0 ? (
                <p className="text-center text-gray-500 py-4">
                    Belum ada tugas.
                </p>
            ) : (
                todos.map((todo) => (
                    <div
                        key={todo.id}
                        className="flex items-center justify-between p-3 bg-white border rounded-lg shadow-sm">
                        <div>
                            <span
                                className={
                                    todo.completed
                                        ? "line-through text-gray-400"
                                        : "text-gray-800"
                                }>
                                {todo.title}
                            </span>
                            <p className="text-xs text-gray-500">
                                {todo.description}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => onToggleTodo(todo.id)}
                                className="cursor-pointer"
                            />
                            <button
                                onClick={() => onDeleteTodo(todo.id)}
                                className="text-red-500 text-sm hover:underline">
                                Hapus
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
