import React from "react";

export const Text = () => {
  return (
    <div>
      <h1>KPMG technical challenge</h1>
      <h2>Challenge 1</h2>
      <ul>
        <li>Prepare a UI component using your favourite framework</li>
        <li>Apply styling via a framework or CSS/LESS/SASS</li>
        <li>Provide Unit Testing for your component</li>
        <li>Show how to use components in the app</li>
      </ul>
      <h2>Challenge 2</h2>

      <p>Get the Middle Character</p>
      <p>
        You have been given a word. Your job is to return the middle character
        of the word. If the word length is odd return the middle character. If
        the word length is even return the middle 2 characters.
      </p>
      <p>Examples</p>
      <ul>
        <li>if the word is "test" return "es"</li>
        <li>if the word is "testing" return "t"</li>
        <li>if the word is "middle" return "dd"</li>
        <li>if the word is "A" return "A"</li>
      </ul>
    </div>
  );
};
