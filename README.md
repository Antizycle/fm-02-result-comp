# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview
Results component with some JS to generate some elements using json-data (and 
randomize data on button press). Trying to transition to Mobile-first approach. 
Also tried to minimize mediaqueries used in this challenge. 
And improve my skills with SCSS.

### Links
- Live Site URL: http://antizycle.online/fm/02-results-component/

## My process
Lay everything out.
Fiddle with css and scss to optimize writing time to create all the possible 
variations of a category bar (definitely not optimal, can be improved and 
generalized). Furthermore I'm not quite sure my implementation of border brackets 
on the category bars is the right way to do something like this (it feels like I've 
invented that bicycle with square wheels...).
Write JS code to fetch JSON file and render category bars with its data (need to
work with fetch a bit). Additionally Average Score and Rank is calculated from the data.
The Percentile is totally random. Button click generates new random scores (max one 
out of five random numbers to generate somewhat higher results).
Didn't go all crazy on data checking and typescript would scream at me :D


### Built with
- SCSS (mixins and variables)
- Flexbox all around
- JS

### What I learned
How to use SCSS Mixins to generate conditional CSS.
Gained a bit more understanding of flexbox and mobile-first approach.
Margin-left: auto to position elements inside flexbox.
Weird use of ::before/after to make bracket borders on a rounded elements :)



- Website - [Antizycle] (https://antizycle.online)
- Frontend Mentor - [@Antizycle] (https://www.frontendmentor.io/profile/Antizycle)
- GitHub [Antizycle] (https://github.com/Antizycle)