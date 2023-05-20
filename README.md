# films-client
### Web Services - Winter 2023
### Kosta Nikopoulos

A client created for a user to interact with an api created named films-api.

Resource URI & Description Required Inputs to be entered in a Web 
form element(s)

1) /films
A list of zero or more film resources that match the 
request criteria. Actors’ names must be included in 
the response.

2) /films/{film_id}
The details of the specified film.

3) /categories/{category_id}/films
A list of films that belong to the specified category
and match the request criteria.
The name of actors must be included in the 
response.

4) /actors
A list of actors that match the request criteria.
Filters:
First name and last name: (starts with, or it 
contains the specified value)

5) /actors/{actor_id}/films
A list of films in which the specified actor played a 
role and match the request criteria.
