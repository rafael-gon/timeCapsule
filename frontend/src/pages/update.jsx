import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import moment from "moment";

import api from "../api";

import '../styles/update.css'

import { Button } from "../components/button";

export function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [base, setBase] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSave = async (event) => {
    event.preventDefault();
  
    const updatedData = {
      title,
      description,
    };
  
    try {
      await api.post(`/${id}`, updatedData);
      console.log('Dados atualizados com sucesso');
      navigate('/');

    } catch (error) {
      console.error('Erro ao atualizar os dados:', error);
    }
  };
  

  useEffect(() => {
    async function getBase() {
      const res = await api.get(`/${id}`);
      const data = res.data;
      setBase(data);
      setTitle(data.title);
      setDescription(data.description);
    }
    getBase();
  }, [id]);

  return (
    <div className="update">
      <form>
        <div>
          <p>{moment(base.date).format("DD [de] MMM, YYYY - HH:mm:ss")}</p>
          <input
            type="text"
            placeholder="Dê um título para sua lembrança"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Fique livre para descrever em detalhes os relatos sobre essa experiência que você quer lembrar para sempre."
          value={description}
          onChange={handleDescriptionChange}
        />
      </form>
      <Button onClick={handleSave}>Modificar</Button>
    </div>
  );
}
