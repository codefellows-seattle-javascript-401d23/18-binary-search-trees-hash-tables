# 18: Binary Search Trees and Hash Tables

**Author**: Joshua Fredrickson and Lacy Hogan

**Version**: 1.0.0 

## Overview
Lab 18 are examples of the Binary Search Trees and Hash Tables Data Structure.  This also 
provides methods to those structures.

## Getting Started
To use the Lab 13 application, [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) 
(Node Package manager) will need to be locally installed.  
Once Node.js and npm  have been installed, install the Lab 18 files.  Prior to starting the Lab 18
application, from the command line while you are in the Lab 18 file folder, enter the command 
`npm i`.  This will download all needed dependencies for the application to run.   


## Architecture
This application was deployed with the following technologies.
Node.js, npm, body-parser, dotenv, express, faker, mongoose, winston, babel, superagent, 
http-errors, jest, eslint, queue-fifo, stack-lifo, JavaScript.

Here is an example of the k-ary find method:
```` find(value) {
        if (!this.root) {
          return null;
        }
        return this._find(this.root, value);
      } 
````
    



## Change Log 
05-09-2018  1:30pm  first commit, scaffolding tests not passing


## Credits and Collaborations
Gratitude to Sarah Bixler, Josiah Green and to all of the Code Fellows staff and fellow 401-d23 
students.
