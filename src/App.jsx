import Student from "./components/Student";
import students from "./data/students";

const App = () => {
  return (
    <div className="bg-slate-100 h-full">

      <div className="flex justify-center">
        <div className="py-16">
          <h1 className="pb-10 text-4xl font-bold leading-none tracking-tight text-slate-900">Student information</h1>
          <div className="grid grid-cols-4 gap-4 text-gray-800 md:grid-cols-3 sm:grid-cols-2 min-[360px]:grid-cols-1">
            {students.map((student) => <Student key={student.id} student={student} />)}
          </div>
        </div>
      </div>
    </div >
  );
};

export default App;
