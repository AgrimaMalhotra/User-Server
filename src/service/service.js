const express = require('express');
const data = require('../models');

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

module.exports = { getUser, getUsers, createUser }