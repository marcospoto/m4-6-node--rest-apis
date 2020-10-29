# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

/customer 'GET' list of all customers
/customer 'POST' add new customer
/customer/:id 'GET' info on a customer
/customer/:id 'PUT' modify info on existing customer
/customer/:id 'PATCH' partially modify customer info
/customer/:id 'DELETE' delete a customer
/stock 'GET' list of all stock
/stock 'POST' add new stock
/stock/:id 'GET' info on specific stock
/stock/:id 'PUT' modify info on existing stock
/stock/:id 'PATCH' partially modify stock info
/stock/:id 'DELETE' delete a stock
/seating 'GET' list of all seating
/seating 'POST' add new seating
/seating/:id 'GET' info on specific seating
/seating/:id 'PUT' modify info on existing seating
/seating/:id 'PATCH' partially modify seating info
/seating/:id 'DELETE' delete a seating
