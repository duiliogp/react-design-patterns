import React from 'react'
import { withEditableUser } from './withEditableUser'

export const UserInfoForm = withEditableUser({user, onChangeUser, onSaveUser, onResetUser }) ;
