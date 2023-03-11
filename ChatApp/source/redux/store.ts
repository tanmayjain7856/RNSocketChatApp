import {createStore, applyMiddleware} from 'redux';
import createSocketIOMiddleWare from 'redux-socket.io';
import io from 'socket.io-client';
import reducer from './reducer';

const socket = io('http://169.254.107.131:3000');
const socketIOMiddleWare = createSocketIOMiddleWare(socket, 'server/');

export const store = applyMiddleware(socketIOMiddleWare)(createStore)(reducer);
