import moment from 'moment';
import React, { useEffect, useState } from 'react';
import api from '../api';

import '../styles/home.css';

import { Loading } from '../components/loading';
import { Memories } from '../components/memories';

export function Home() {
  const [base, setBase] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBase() {
      const res = await api.get('/');
      setBase(res.data);
      setLoading(false);
    }
    getBase();
  }, []);
  

  const handleDelete = (id) => {
    setBase((prevBase) => prevBase.filter((memorie) => memorie._id !== id));
  };

  return (
    <div className="home">
      {loading ? (
        <Loading />
      ) : (
        base
          .slice()
          .sort((a, b) => moment(b.date).diff(moment(a.date)))
          .map((memorie) => (
            <Memories
              key={memorie._id}
              id={memorie._id}
              onDelete={handleDelete}
            />
          ))
      )}
    </div>
  );
}
