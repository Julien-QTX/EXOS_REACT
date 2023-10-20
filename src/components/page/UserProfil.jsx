import React from 'react';
import { useParams } from 'react-router-dom';
import users from '../../users.json';

const UserProfile = () => {

  const { id } = useParams();

  const user = users[id];

  return (
    <div>
      <h2>Profil de l'utilisateur</h2>
      <br/>
      <p>Id d'utilisateur : {user.id}</p>
      <p>Nom d'utilisateur : {user.name}</p>
    </div>
  );
};

export default UserProfile;
