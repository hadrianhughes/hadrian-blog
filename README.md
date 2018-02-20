# Blog

A blog built with React.

## Usage

### Without Docker

Install dependencies: `npm install`

To build: `npm run build`

To build with watch task: `npm run dev`

To run server: `npm start`

Environment variables should be put in a .env file in the project root.

### With Docker

This assumes that the Content Service which goes along with this project [https://github.com/hadrianhughes/content-service] is one level above.

To build (after creating docker-compose.yml file): `docker-compose build`

To run: `docker-compose up`

To build and run in development mode: `docker-compose -f ./docker-compose.dev.yml up --build`
