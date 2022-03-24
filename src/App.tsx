import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WorkTable from "./components/WorkTable";
import { Work } from "./services/job-management/types/workTypes";
import { getAll } from "./services/job-management/works.service";

function App() {
  const [ data, setData ] = useState<Work[]>([]);
  const [ searchTerm, setSearchTerm ] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    getAll()
      .then(res => setData(res.response.data))
      .catch(err => {
        console.log(err)
        setTimeout(fetchData, 10 * 1000);
      })
  }

  const filterData = (data: Work[]) => {
    return data.filter(dataRow => (
      dataRow.description.includes(searchTerm)
    ));
  }
  
  return (
    <div className="App">
      <span className="search-block">
        Search in description:
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </span>
      <WorkTable rows={filterData(data)} />
    </div>
  );
}

export default App;
