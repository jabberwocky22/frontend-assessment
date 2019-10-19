# Technical assessment for MindArc

## Introduction:
+ This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

+ To run the project:
>In the project directory,
 > 1. run: [npm install] which will install all modules which are needed.
 > 2. run [npm start] which will Run the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser if it did not show up.

## Style Library:
+ Bootstrap 4 is used to help make tab and accordion styles.

## Category:
+ ./src:
> Project is in this file.
+ ./src/Components:
> App.js: Main template.
> Tab.js: Tab component which will ride on App.
> Accordion: Accordion component which will ride on App.
+ ./src/data:
> data.json: Original file from the assessment.
+ ./src/Resources:
> desktop_banner: Original image from the assessment.
> mobile_banner: Original image from the assessment.
> content_img: Original image from the assessment.

## Answer to bonus question:
> `('b' + 'a' + + 'a' + 'a').toLowerCase()`
>+ = ('b' + 'a' + (+'a') + 'a').toLowerCase()
>+ = ('ba' + (NaN) + 'a').toLowerCase(), --> +'a' = NaN(Not a Number), because "+" here represents "positive" and which expects a number after it.
>+ = ('baNaNa').toLowerCase()
>+ = banana;
