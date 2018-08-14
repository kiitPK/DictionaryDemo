import React, { Component } from 'react';

const URI = 'https://api.datamuse.com/words?ml=';


export default {
    async fetchUsers(word) {
        try {
            let response = await fetch(URI + '' + word + '&max=10');
            let responseJsonData = await response.json();
            return responseJsonData;
        }
        catch (e) {
            console.log(e)
        }
    }
}