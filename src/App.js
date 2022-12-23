import { useState } from 'react';
import { useQuery } from 'react-query';
import './App.css';
import DataTable from './components/DataTable';

function App() {

  const [modalIsOpen, setIsOpen] = useState(false);

  const { data: hobbies = [], refetch } = useQuery({
    queryKey: ['hobbies'],
    queryFn: async () => {
      const res = await fetch('https://red-positive-server.vercel.app/hobbies');
      const data = await res.json();
      return data;
    }
  });

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <DataTable
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        openModal={openModal}
        closeModal={closeModal}
        hobbies={hobbies}
        refetch={refetch}
      ></DataTable>
    </div>
  );
}

export default App;
