import express from 'express';
import data from '../models/index.js';

const getUser = async (id) => {
  return data.users[Number(id) - 1];
}

const getUsers = async () => {
  return data.users;
}

const createUser = async (user) => {
  const newUser = {
    id: data.users.length + 1,
    name: user.name,
    email: user.email
  };
  data.users.push(newUser);
  return newUser;
}

export default { getUser, getUsers, createUser }