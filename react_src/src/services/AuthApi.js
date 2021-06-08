import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from './LocaleStorage';

export function hasAuthenticated() {
    const token = getItem('projetmobileToken');
    const result = token ? tokenIsValid(token) : false;
    if(false === result){
        removeItem('projetmobileToken');
    }

    return result;
}
export function login(credentials){
    return axios
    .post('http://localhost:3001/login', credentials)
    .then(response => response.data.token)
    .then(token => {
        addItem('projetmobileToken', token);

        return true;
    });

}
export function logout(){
    removeItem('projetmobileToken');

}

function tokenIsValid(token){
    const { exp } = jwtDecode(token);

    if(exp * 1000 >  new Date().getTime()){
        return true;


    }
    return false;
}