# QR Code Generator

A simple Node.js and Express.js application for generating QR codes and saving related information.

## Table of Contents

- [QR Code Generator](#qr-code-generator)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Contributing](#contributing)
  - [License](#license)

## Description

This project is a basic QR code generator built using Node.js and Express.js. It allows users to input a URL and generates a QR code image, saving the QR code image and the URL in separate files.

## Features

- Generate QR codes from provided URLs.
- Save the generated QR code image and URL information.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MBABHISHEK/qr_code_generator.git

2.**Navigate to the project directory:**
   cd qr_code_generator
   
3.**Install dependencies:**
    npm install   

4.*to start the server*
npm start
The server will run at http://localhost:3000.

Access the web interface:

Open your browser and go to http://localhost:3000 to access the web interface.

Generate a QR code:

Enter a URL in the input field on the web interface.
Click the "Generate QR Code" button.
Check the generated QR code:

The QR code image will be saved in the public/qr_img.png file.

Endpoints
GET /: Serves the HTML file for the web interface.
POST /generate-qr: Accepts JSON with a URL, generates a QR code, saves the QR code image, and the URL in separate files.
