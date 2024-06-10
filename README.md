# Booking-clone
![New Project](https://github.com/sekak/booking-clone/assets/53265264/b820062f-760e-4bac-97c2-d1b6ca92292d)

A more straightforward iteration of a well-known booking website, booking clone is made to let consumers easily reserve a range of services or lodging. This clone attempts to mimic the key features of a booking system, such as making reservations for a hotel room, villa, resorts...</br>

👋 Visit my live website: https://front-end-zeta-eosin.vercel.app/

# Installation
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
    - Your `.env` file should now look something like this:</br>
      ```MONGO=mongodb+srv://<username>:<password>@<cluster-address>/<database-name>```</br>
      ```JWT=example_secrite```
      
# Technology Stack
  React, ExpressJs, Javascript, React-Router-Dom, Firebase, date-fns, CSS, Axios, nodemailer, BcryptJS, Cookie-parser, JWT
# Functionalities Associated With the Website
   - Users can create an account and log in.
   - Users can add their photo.
   - Search for lodgings across various countries and types of accommodations.
   - Users can filter hotels and rooms based on budget and star rating.
   - Check room availability for specific dates and times.
# Glimpse of the Website
1. Landing page.

   <img width="2543" alt="Screen Shot 2024-06-10 at 11 22 39 AM" src="https://github.com/sekak/booking-clone/assets/53265264/7a8edaec-2a49-47b4-b047-1c2816745344">
   
2. Footer

   <img width="2543" alt="Screen Shot 2024-06-10 at 11 22 55 AM" src="https://github.com/sekak/booking-clone/assets/53265264/64e7300e-5c34-43d8-a3bd-ad6da4a12636">
   
3. Login & Register

   <img width="2543" alt="Screen Shot 2024-06-10 at 11 23 35 AM" src="https://github.com/sekak/booking-clone/assets/53265264/c2f1b535-8536-4901-aed5-43f80cfe6b3a">
   <img width="2543" alt="Screen Shot 2024-06-10 at 11 23 23 AM" src="https://github.com/sekak/booking-clone/assets/53265264/048810bc-eb43-4498-856c-af0b0b98860e">

4. Other pages

   <img width="2543" alt="Screen Shot 2024-06-10 at 11 25 25 AM" src="https://github.com/sekak/booking-clone/assets/53265264/2ca48af5-971a-432b-a99b-8c003ef87acb">
   <img width="2543" alt="Screen Shot 2024-06-10 at 11 25 05 AM" src="https://github.com/sekak/booking-clone/assets/53265264/e0d333e8-a821-40d7-921d-a3a51ff6fa24">
   <img width="2543" alt="Screen Shot 2024-06-10 at 11 24 54 AM" src="https://github.com/sekak/booking-clone/assets/53265264/57801e3f-c0a0-40c9-a527-13cc31ea6ae2">

   


