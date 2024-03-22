# PartySync

## Host parties and invite friends, all in one app


<img src="https://github.com/Stephen-c-Kelly/partysync-front-end/assets/149907841/0929675f-ad85-4f51-b7c0-1e5bed76cf81" alt="drawing" width="300"/>

### Party SYNC is a full-stack app that uses the Python-based Django REST Framework with a React.js frontend.

This app helps party hosts invite friends to one location where they can read all the party details. 


## Technologies and Libraries Used
This application is built using the Python-based Django REST Framework with a React.js frontend and a Heroku/Netlify deployment.

Backend Technologies used:
-- Python
-- Django
-- Sql
-- JWT Auth
-- Heroku


FrontEnd Technologies used
-- Node.js
-- React.js
-- Netlify
-- Photoshop

## MVP User Stories & Stretch Goals
https://trello.com/b/Vdd8iW0j


<img src="https://github.com/Stephen-c-Kelly/partysync-front-end/assets/149907841/69ac315a-451b-4708-b988-8ee19e51bb47" width="300"/>


## Team

- **Lauren Marsh** - Frontend, Readme, CSS
- **Stephen Kelly** - Backend, Project Manager
- **Adekunle Shennaike** - Backend, DB Manager
- **Charlie Bedell** - Full Stack Developer, Git Owner

## Website Links
Deployed Website: https://partysync.netlify.app

Deployed Server: https://partysync-5fbbda6a7756.herokuapp.com/

Server/Backend GitHub Repo: 


## Technical Architecture
ERD Designs: 
https://lucid.app/lucidchart/a65caa7b-f0a6-45fd-b558-37745a0558c4/edit?viewport_loc=-14%2C548%2C1559%2C1161%2C0_0&invitationId=inv_ea69fb52-d35c-48f9-a8bf-0669eaf4174a 

Routing Spreadsheet:
https://docs.google.com/spreadsheets/d/1Q1idavv3LZY2kAkccbwiL8dy9StduikUcQwfDO6hsJM/edit?usp=sharing

Component Hierachy: 
![Component Hierarchy Diagram](https://github.com/Stephen-c-Kelly/partysync-front-end/assets/149907841/0d0d167e-a0cb-47eb-83a9-ff10541281a8)

## Timeline
Google Sheets Timeline - https://docs.google.com/spreadsheets/d/1peOxh3dCrDTR9kc8w78E-Ya2__stz0Va/edit?usp=sharing&ouid=113166202235789311037&rtpof=true&sd=true
	
#### Resources
Django API: https://www.django-rest-framework.org/tutorial/quickstart/#urls 
Postgresql: https://www.postgresql.org/docs/
Partiful (party invite app): https://www.postgresql.org/docs/ 
Spotify API Documentation: https://developer.spotify.com/
Pexels: https://www.pexels.com/

# Setting up your dev environment

## clone the repo

`git clone https://github.com/charlie-bedell/partysync-front-end.git`

## pull down the dev branch

`git pull dev`

## install dependencies

`npm i`

## spin up tailwind watcher

compiling tailwind with the --watch argument will update the css whenever there
is a change
`npx tailwindcss -i ./src/input.css -o ./src/output.css --watch`

## spin up the dev server

`npm run dev`
