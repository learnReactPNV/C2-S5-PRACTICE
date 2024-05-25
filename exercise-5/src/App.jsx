import Card from "./components/Card";
import { STUDENTS_PNV25B } from "./data";

function App() {
  return (
    <div className="text-center mt-3 body">
      <h1 className="mb-5 title">Students in PNV25</h1>
      <div className="row m-0 gap-3 d-flex justify-content-center">
        {STUDENTS_PNV25B.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
