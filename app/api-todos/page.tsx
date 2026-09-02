import { getTasks } from "@/lib/todos"; // Menggunakan getTasks untuk fetch data API
import ApiTodoList from "app/api-todos/components/ApiTodoList"; // Ganti import ke ApiTodoList

// 4. Deklarasikan Server Component Asinkron
export default async function TodoPage() {
    // Ambil data tugas dari API melalui function lib Anda
    const result = await getTasks();
    const initialTasks = result.tasks || [];

    return (
        <main className="min-h-screen p-6 md:p-10 bg-white text-dark-70">
            <div className="max-w-2xl mx-auto space-y-6">
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-70">
                    <header className="mb-6 border-b border-gray-100 pb-4">
                        <h1 className="text-2xl md:text-3xl font-bold text-dark-70 text-center">
                            Daftar Tugas (Todo List)
                        </h1>
                    </header>

                    {/* Render komponen ApiTodoList dengan prop initialTasks */}
                    <ApiTodoList initialTasks={initialTasks} />
                </div>
            </div>
        </main>
    );
}
