import React, { useEffect, useState } from 'react';
import { IoTrashBinOutline, IoPencilSharp } from 'react-icons/io5';
import moment from 'moment';
import api from '../api';
import '../styles/memories.css';

export function Memories(props) {
  const [base, setBase] = useState([]);

  useEffect(() => {
    async function getBase() {
      const res = await api.get(`/${props.id}`);
      setBase(res.data);
    }
    getBase();
  }, []);

  function deleteMemorie(id) {
    api.delete(`/${id}`)
      .then((res) => {
        console.log(res.data);
        // Call the onDelete callback passed from Home to update the UI
        props.onDelete(id);
      })
      .catch((error) => {
        console.error('Erro ao excluir item de memória:', error);
      });
  }

  return (
    <div className="memories">

      <div className="top">
        <div className='date'>

          <div className='line' />
          <p>{moment(base.date).fromNow()}</p>

        </div>

        <p>{base.title}</p>

      </div>

      <p className='main'>{base.description}</p>

      <div className="bottom">
        <a onClick={() => deleteMemorie(props.id)}>
          <IoTrashBinOutline />
        </a>
        <a href={`/update/${props.id}`}>
          <IoPencilSharp />
        </a>
      </div>
    </div>
  );
}
