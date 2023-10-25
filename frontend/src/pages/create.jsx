import { useEffect, useState } from "react";
import { Button } from "../components/button";
import '../styles/create.css';
import api from '../api';
import moment from "moment";

// adicionar uma popup perguntando se a pessoa quer adicionar outra memoria 
// se nao usar o useNavigate para mandar ela de volta para a tela inicial

export function Create() {
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


    try {
      const response = await api.post('/', { title, description });
      console.log("Post bem-sucedido:", response.data);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Erro ao fazer o post:", error);
    }
  };

  return (
    <div className="create">
      <form>
        <div>
          <p>{moment().format("DD [de] MMM, YYYY")}</p>
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
      <Button onClick={handleSave}>Salvar</Button>
    </div>
  );
}
