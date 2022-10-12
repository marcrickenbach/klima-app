import React, { useState, useEffect } from 'react';
import employees from './employees';

function FilterEmployeesList( {employees} ) {
  console.log({employees});
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebouncedValue(query, 600);

  const onChange = (event) => setQuery(event.target.value);

  const filteredEmployees = employees.filter((name) => {
    return name.toLowerCase().includes(debouncedQuery.toLowerCase());
  });

  return (
    <div>
      <h2>Employees List</h2>
      <input type="text" value={query} onChange={onChange} />
      <div className='list'>
        {
          filteredEmployees.map((name) => (
            <div>{name}</div>
          ))
        }
      </div>
    </div>
  );
}


function useDebouncedValue(value, wait) {
  console.log(value);
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(value), wait);
    return () => clearTimeout(id);
  }, [value, wait]);
  return debouncedValue;
}

export default function App() {
  return (
    <div className="app">
      <FilterEmployeesList employees={employees} />
    </div>
  );
}
