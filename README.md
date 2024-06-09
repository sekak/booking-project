# Booking-clone
![New Project](https://github.com/sekak/booking-clone/assets/53265264/b820062f-760e-4bac-97c2-d1b6ca92292d)

A more straightforward iteration of a well-known booking website, booking clone is made to let consumers easily reserve a range of services or lodging.This clone attempts to mimic the key features of a booking system, such as making reservations for a hotel room, villa, resorts...</br>

👋 Visit my live website: https://front-end-zeta-eosin.vercel.app/

# Installations
1. Clone the repository from branch booking-clone: `git clone https://github.com/sekak/booking-clone.git`</br>Or download: https://github.com/sekak/booking-clone/archive/refs/heads/booking-clone.zip
2. Install dependencies: </br>
   - Backend</br>
   ```cd booking-clone/backend-nodejs```</br>
   ```npm install```
   - Frontend</br>
   ```cd booking-clone/front-end```</br>
   ```npm install```
   
4. Set up mongodb firstly:</br>
    - Log in to MongoDB Atlas: Go to the MongoDB Atlas website and log in to your account.

    - Select your project: If you have multiple projects, select the appropriate project for your LittleBooking Clone.

    - Navigate to Clusters: In the left sidebar, click on "Clusters" under the "Data Storage" section.

    - Choose your cluster: Click on the cluster that you've set up for your project.

    - Get the connection string: On the cluster overview page, click on the "Connect" button.

    - Choose connection method: Select "Connect your application".

    - Copy the connection string: You'll see a connection string similar to this:</br></br>
       ```mongodb+srv://<username>:<password>@<cluster-address>/<database-name>```</br></br>
       <img width="1738" alt="Screen Shot 2024-06-09 at 1 14 32 PM" src="https://github.com/sekak/booking-clone/assets/53265264/35e3d672-5493-409a-8432-2cb8fabbf265">

     
    - Paste into your `.env` file: Open your `.env` file in the `backend-nodejs` directory of your project, and paste the connection string after `MONGO=`.
    - your `.env` file should now look something like this:</br>
      ```MONGO=mongodb+srv://<username>:<password>@<cluster-address>/<database-name>```</br>
      ```JWT=example_secrite```
      
# Technologie stack
  React, ExpressJs, Javascript, React-Router-Dom, Firebase, date-fns, CSS, Axios, nodemailer, BcryptJS, Cookie-parser, JWT
