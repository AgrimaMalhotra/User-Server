import express from 'express';
import service from '../service/service.js';

const getUser = async (req, res) => {
  const user = await service.getUser(req.params.id);
  res.status(200).json(user);
}

const getUsers = async (req, res) => {
  const users = await service.getUsers();
  res.status(200).json(users);
}
const createUser = async (req, res) => {
  const user = await service.createUser(req.body);
  res.status(201).json(user);
}

export default { getUser, getUsers, createUser }