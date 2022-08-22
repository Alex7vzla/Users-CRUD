import axios from "axios";
import React from "react";
import 'boxicons'

const CardUsers = ({ user, getAllUsers, setUpdateInfo, handleOpenForm }) => {

  const deleteUser = () => {
    const URL = `https://users-crud1.herokuapp.com/users/${user.id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const handleUpdateClick = () => {
    handleOpenForm()
    setUpdateInfo(user)
  }

  return (
    <article className="card">
      <ul className="card__list">
        <li>
          <span className="card__title">{user.email}</span>
        </li>
        <li className="card__item">
          <span className="card__span">{user.password}</span>
        </li>
        <div className="names">
          <li className="card__item">
            <span className="card__span">{user.first_name}</span>
          </li>
          <li className="card__item">
            <span className="card__span">{user.last_name}</span>
          </li>
        </div>
        <li className="card__item">
          <span className="card__span">{user.birthday}</span>
        </li>
      </ul>
      <footer className="card__footer" >
        <a className="card__btn" onClick={deleteUser}><box-icon name='trash' color='red'></box-icon></a>
        <a className="card__btn" onClick={handleUpdateClick}><box-icon name='pencil' color='white'></box-icon></a>
      </footer>
    </article>
  );
};

export default CardUsers;
