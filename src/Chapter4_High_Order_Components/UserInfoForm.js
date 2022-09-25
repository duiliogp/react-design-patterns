import React from 'react'
// import { withEditableUser } from './withEditableUser'
import { withEditableResource } from './withEditableResource'

// export const UserInfoForm = withEditableUser(({ user, onChangeUser, onSaveUser, onResetUser }) => {

export const UserInfoForm = withEditableResource(({ user, onChangeUser, onSaveUser, onResetUser }) => {
  const { name, age, hairColor } = user || {};

  return user ? (
    <>
      <label>
        <div>Name:</div>
        <input value={name} onChange={e => onChangeUser({ name: e.target.value })} />
      </label>
      <label>
        <br /><br />
        <div>Age:</div>
        <input value={age} onChange={e => onChangeUser({ age: e.target.value })} />
      </label>
      <label>
        <br /><br />
        <div>Hair Color:</div>
        <input value={hairColor} onChange={e => onChangeUser({ hairColor: e.target.value })} />
      </label>

      <br /><br />
      <button onClick={onSaveUser}>Save</button>
      <br />
      <br />
      <button onClick={onResetUser}>Reset</button>

    </>
  ) : <p>loading...</p>
}, 'users/1', 'user');  
