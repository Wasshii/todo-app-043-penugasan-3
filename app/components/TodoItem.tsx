"use client";

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    return (
        <div className="flex items-center justify-between p-3 mb-2 bg-white border rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                />
                <span
                    className={`text-gray-800 ${
                        todo.completed ? "line-through text-gray-400" : ""
                    }`}>
                    {todo.text}
                </span>
            </div>
            <button
                onClick={() => onDelete(todo.id)}
                className="text-red-500 hover:text-red-700 text-sm font-medium">
                Hapus
            </button>
        </div>
    );
}
