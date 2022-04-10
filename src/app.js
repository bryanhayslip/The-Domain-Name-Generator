/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let myDomain = function generateDomain() {
  let pronoun = ["the", "my", "her", "their", "his"];
  let subject = ["kitchen", "cat", "umbrella", "mouse", "basket"];
  let description = ["game", "adventure", "challenge", "journey", "issue"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let descriptionIndex = Math.floor(Math.random() * description.length);

  return (
    pronoun[pronounIndex] +
    subject[subjectIndex] +
    description[descriptionIndex] +
    ".com"
  );
};

console.log(myDomain);
