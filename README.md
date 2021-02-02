# Full-Stack test for candidate

We expect the candidate create an API **(Backend)** and a **(client)** Frontend to consume and display **API DATA**

## Technical requirements
****
Usage of this following stack are requested: 

- NodeJS with Typescript
- ES6+
- Angular 9+ 
- Docker (for containerize application)
- MongoDB 
- SCSS (for styling)


## Front-end technical requisites : 
****
The front-end must be done with Angular and separated from the API.
The configuration of your angular will be checked within the following implementations: 

* Middleware
* Interceptors 
* Module 
* Component
* Services
* SEO-friendly
* Clear HTML

### The application have to contain this:

- **Account Parts** 
  (fields : id, username, password, userLevel, createdDate, updatedDate)
    - Register
    - Login
- **Product Parts**
  (fields : id, name, idAccount, price, description, stock, createdDate, updatedDate)
    - Create
    - Update
    - Delete
    - List 
    - view  (show all details about product)
    - Search : The user must be able to filter products by price, stock, name and dates


## Backend technical requisites :

The front-end must be done with ExpressJS, you have to set middleware and authentication services:

- **Account endpoint**   
    - **(POST) /signin** (_have to be accessible without any authentication_)
    - **(POST) /signup** (_have to be accessible without any authentication_)   
 ****     
#### All this following endpoints will be accessible with authentication

- **Product endpoint** 
    - **(POST) /products** (_create new product_)
    - **(DELETE) /products/{id}** (_delete given id product_)
    - **(PUT) /products/{id}**  (_update given id product_)
    - **(GET) /products** (_return list of all products_)
    - **(GET) /products/{id}** (_return given id product_)    
      
## Database requisites :
 
For this exercise you have to use mongoDB.
Feel free to build your own database, best practises are be accounted for.
                             
## Running and executing requisites 
For this last part you have to build your own Dockerfile. This last part is 
optional and allows us to determinate how far you have gone. 

Please use best practices, don't forget to save all  packages installed through npm. 
                             
### Have fun !
You have 5 days counting from tomorrow to finish and deliver us the address of your github repository. 
Please, let us know if you need more time.
               
**Thank you for giving us this opportunity to get to know you and your work.**
