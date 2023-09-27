const {test, expect }= require('@jest/globals')
const logar = require('./logar')
const validaCaracteres = require('./validaCaracteres')
const quantDigito = require('./quantDigito')

test ('logado', () => {
    expect(logar("Nome@gmail.com","N12@3458")).toBe(true)   
});

test ('login incorreto', () => {
    expect(logar("","")).toBe(false)   
});




//-------valida quantidade de digitos ----------------------------

test ('login incorreto', () => {
    expect(quantDigito("58")).toBe(false)   
});

test ('logado quantidade de digitos', () => {
    expect(quantDigito("N12@3458")).toBe(true)   
});




//------------------------------------------------------------------
//--------valida caracteres especiais------------------------------

test ('login incorreto caracter especial', () => {
    expect(validaCaracteres("nomegmail.com", "33fj243423")).toBe(false)   
});

test ('logado caracter especial', () => {
    expect(validaCaracteres("Nome@gmail.com","N12@3458n")).toBe(true)   
});

