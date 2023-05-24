import {useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { isUser, redirect } from "../functions/isUser";

const Dashboard = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isUser() === false) {
      redirect();
    }
  });
  return (
    <>
      <div>
        <h2>Estos son tus artculos</h2>
        <button onClick={() => {navigate(`/dashboard/${userId}/articles`);}}>Ver articulos</button>

      </div>
    </>
  );
};

export default Dashboard;
