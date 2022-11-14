



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
   
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


Weekly, staff and manager of departments of GoStream company will have a meeting and an internal software is used for storing the minutes of the meeting. This simple system implements that idea by allowing user to authenticate and make change to their meetings minutes.
User can create new minute with his/her check in person and can save it to the database for future usage.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

Vue.js <br/>
Node.js <br/>
Express.js<br/>
Mongoosh

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

User need to install git, and mongod

### Prerequisites

If you have not install npm yet, you should infer this link https://phoenixnap.com/kb/install-npm-mac.
To control database, you should download MongoDb Compass via this link https://www.mongodb.com/products/compass.
Check if you have install git yet by typing in the command line  
```sh
   git version
  ```
If you have not, you need to install git first by  typing in the command line
```sh
   sudo apt-get install git-all
  ```
Then you move to folder where you want to put the project in.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/nguyenbanhducA1K51/CheckInSystem.git
   ```
2. Install NPM packages in CheckInSytem/server (Assume that now you are in the folder CheckInSystem )
   
   ```sh
   npm i
   ```
3.Install NPM packages in CheckInSytem/vue-client (Assume that now you are in the folder CheckInSystem )
 
   ```sh
   npm i
   ```
   
4. Create jwt web token at https://jwt.io/
5. Create .env file in CheckInSytem/server 
6. in that .env file, type these line
 ```sh
   PORT=3100
JWT_SECRET=<your jwt token in step 4>

   ```
7. In CheckInSytem/server, run this command
```sh
   nodemon index.js
   ```
8. In CheckInSytem/client, run this command
```sh
  npm run serve
```
Here is the result
<img width="949" alt="Screen Shot 2022-11-13 at 23 10 24" src="https://user-images.githubusercontent.com/86947901/201573502-369d2df4-791f-4d62-93d7-45f602952c98.png">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

<!-- Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

This project is copyright free. You can use for any of your purpose !

<!-- CONTACT -->
## Contact

Duc Nguyen - ducnguyen.wings@gmail.com or nguyeduc@dickinson.edu



<p align="right">(<a href="#readme-top">back to top</a>)</p>

