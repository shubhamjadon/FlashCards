# FlashCards
## A app to help people memorise things made in MERN stack

Follow following to successfuly run it on your system:

Prerequisites:
1. Install node.js and npm(https://nodejs.org/en/download/) on your system.
2. Install Mongodb on your system(refer to mongodb documentation) or just sign up for mongodb atlas(make sure your database is running successfully)

After finshing installing prerequisite:
1. Clone this repository on your system.
2. Then open terminal inside Frontend folder and run "npm install"
3. Then open terminal inside Backend folder and run "npm install"
4. Then open config.js present at Backend/db and now if your mongodb server runs on some other port then change uri to match the same(27017 inside config.js is port)
5. If you are using mongodb atlas then put following: ``` uri = "mongodb+srv://<username>:<password>@cluster0-wqaug.mongodb.net/test?retryWrites=true&w=majority"```(subsitude value of username and password)
6. Create a .env file inside Backend and put the following inside it: 
```
PORT=8080 //port where your nodejs server will run
DBNAME='notes' //name of database that will be used in mongodb
COLLECTION='python' //name of collection that will be used in notes database
```
7. Now if you are using local mongodb then start it using mongod command or if you are using mongodb atlas then make sure your ip address is whitelisted in it.
8. Then open Backend in terminal and write following command : ``` node app.js ``` if you see 'Server is running on port 8080' then server has started successfully 
9. Then open Frontend in another terminal and write following command: ``` npm start ``` it will start react server
10. This shoud run the project successfully.

Note: If while doing step 9 you do not see server is running on port 8080 then there might be some problem with mongodb setup.(Try to check wheter mongodb is working perfectly before starting further).
If you see any issue then feel free to mention them in Issues of FlashCards repository
