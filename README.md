# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [URL shortening API landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents✒️

- [Overview](#overview)🎯
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)🔗
- [My process](#my-process)🧩
  - [Built with](#built-with)🔨
  - [What I learned](#what-i-learned)📝
  - [Useful resources](#useful-resources)
- [Author](#author)🙋🏻

## Overview🎯

### The challenge

Users should be able to:

  - View the optimal layout for the site depending on their device's screen size
  - Shorten any valid URL
  - See a list of their shortened links, even after refreshing the browser
  - Copy the shortened link to their clipboard in a single click
  - Receive an error message when the form is submitted if: The <code>input</code> field is empty

### Screenshot

### Links🔗

- Live Site URL: [URL Shortening Landing Page](https://alvaro-j.github.io/url-shortening/)

## My process🧩

### Built with🔨

- Semantic HTML5 markup
- CSS custom properties
- SASS
- Flexbox
- JavaScript

### What I learned📝

- Use <strong>@import</strong> rule to import the font that i want to use.
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
```
- Use <strong>SASS variables</strong> in a React project. SASS variables need to be imported in each file in which i want to use them.
```css
@import "variables";
```
- Use <strong>overflow-x</strong> property to hide the horizontal scrollbar.
```css 
* {
overflow-x: hidden;
}
```
- Use <strong>SASS Mixins</strong>.
```css
@mixin btn-cyan {
	background-color: $cyan;
	color: white;
	border: none;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		filter: opacity(0.5);
	}
}
```

### Useful resources

- [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) - This helped me to understand how to make a interval before an action execute.

## Author🙋🏻

- Website - [Álvaro J.](https://portifolio-2021-ecru.vercel.app/)
- Frontend Mentor - [@alvaro-j](https://www.frontendmentor.io/profile/alvaro-j)
