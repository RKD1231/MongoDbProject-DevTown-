##
server >> storing certain book data
       >> user Registration
       >> subscriber
    This is a book record management API server/ Backend for library system or management 

Fine system:
user:06/03/2023 - 06/06/2023
07/06/2023 => 50
if 09/06/2023 =>50*3


3 months (Basic)
6 months (Standard)
12 months (premium)



If the subscribtion type is standard && if the subscribtion date is 06/03/2023
=>then valid till 06/09/2023

within subscribtion data if missed the renewal >>50/- per a day

subscribtion date is missed and >> we also missed the renewal date >> 100+50 /- per day

>> book1
>> basic
>> subscribtion date =>06/03/2023
>>book borrowed at => 07/03/2023
>> book1 renewal date is =>21/03/2023
>> 23/03/2023 => we need to pay a fine of 50*2



>> book1
>> basic
>> subscribtion date =>06/03/2023
>>book borrowed at => 07/03/2023
>> book1 renewal date is =>21/03/2023
>> 23/06/2023 => we need to pay a fine of 100 + (no of days)*50




# Routers and EndPoints

## /user
post: Create a new user (we are sending data to server)
Get: get all the info here user (we are sending data to serve)


## /user/{id}
Get:Get a user by id 
put:update user by there id (with the help of put or patch we can update slite changes to our server)
Delete: Delete user by id (Check if he or she still have a issued book) & (is there any to be paid)


## /user/subscribtion-details/{id}

Get: get user subscribtion details
            >> Date of subscription
            >> Valid till
            >> Is there any fine

## /books
Get: get all the book
Post: Create or add a new book

## /books/{id}
Get: get a book by id
Put: update a book by id

## /books/issued
Get: get all the issued books

## /books/issued/withfine

Get: get all the issued book with there fine
