const team = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'assets/img/wayne-barnett-founder-ceo.jpg',
  }, 
  {
    nome: 'Angela Carroll',
    ruolo: 'Chief Editor',
    foto: 'assets/img/angela-caroll-chief-editor.jpg',
  }, 
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'assets/img/walter-gordon-office-manager.jpg',
  }, 
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'assets/img/angela-lopez-social-media-manager.jpg',
  }, 
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'assets/img/scott-estrada-developer.jpg',
  }, 
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'assets/img/barbara-ramos-graphic-designer.jpg',
  } 
]

const body = document.querySelector('body');
const output = document.createElement('ul');
body.appendChild(output);

// stampo in console
/*********************************
for (let member of team) {
  for (let key in member)
    console.log(key, member[key]);
}
*********************************/

// stampo stringhe 
/************************************ 
for (let member of team) {
  for (let key in member) {
    output.innerHTML += `
    <li> ${key}: ${member[key]}</li> 
    `
  }
}
************************************/

for (let member of team) {
  output.innerHTML += `
    <li> ${'nome'}: ${member.nome}</li> 
    <li> ${'ruolo'}: ${member.ruolo}</li> 
    <li> <img src="${member.foto}"> </li> 
    `
}

