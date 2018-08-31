# Web servers

##Description
We will be creating the backend portion of an application. We already have a client React App and we want to connect this client app to the server we will be creating in order to retrieve a series of books. 
**Note**: This app would ideally use a Database to store and retrieve data. But since we have not covered the topic of Databases we will be using an array that lives on our server.

##Instructions
You are tasked with writing a RESTful API that implements CRUD methods for our Books resources.

Create a ```factory function``` named book that takes 3 parameters (title, author, synopsis).

Create route handlers for:
1. ```GET``` requests to the ```/books``` url. This handler should respond with the ```bookArray```
2. ```POST``` requests to the ```/books``` url. This handler should create a new book and add it to the ```bookArray```, use the ```book factory function``` for this. You will be able to extract the relevant data that you need to create a book from ```req.body```. This handler should respond with the ```bookArray```. You can test it by filling the book form and clicking ```submit```.
3. ```PUT``` requests to the ```/books/:title``` url. This handler should first find a book in the ```bookArray``` by its title. Once you find the book, you should replace it with a new book that you will build using the ```book factory function```. Just like in step 2, you can extract the data from ```req.body```. This handler should respond with the ```bookArray``` You can test it by selecting a book, changing one of the fields in the form and clicking ```update```. 
4. ```DELETE``` requests to the ```/books/:title``` url. This handler should find a book with the specified title and remove it from the ```bookArray```. This handler should respond with the ```bookArray```.