# Restaurant App

This was a group assignment as part of the course 'Advanced Javascript' in the Front End Developer program at Medieinstitutet (Stockholm). The assignment was to create a restaurant app with a booking system based on certain criteras that is listed further down.

**The application was made by me and [Sanna Rossäng](https://github.com/sannarossang). 🤝**

## Description

The restaurant has 15 tables for six people at each table. The restaurant has two seatings each evening, one at 6:00 PM and one at 9:00 PM. Therefore, all tables are available for booking twice per evening.

If a seating at a given date and time is fully booked, or if you're trying to book for more persons than there are seats left, the time slot will say that it is and you will not be able to go through with a booking.

When a booking is done, you'll get a confirmation with the booking details that also says you're getting an email with all the details. Unfortunately you're not getting an email for real, since this was one of two options and we chose the other one which was to implement a feature where the customer can cancel their reservation.

To cancel your reservation, go to http://localhost:5173/reservation/<your booking id>

## Tech stack

- React
- Typescript
- JavaScript
- MongoDB
- ExpressJS
- NodeJS
- Styled Components

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/feliciacalming/restaurant-app__react.git
   ```
2. Install dependencies in both frontend/backend by running following command in the root of the project:

```bash
npm run install
```

3. Start both frontend/backend by running the following command in the root of the project:

```bash
npm run all
```

That's it! Book a table and enjoy :)

## Routes

### Admin

##### GET

- http://localhost:4000/api/v1/admin
- http://localhost:4000/api/v1/admin?seatingDate=2023-06-1
- http://localhost:4000/api/v1/admin/:bookingId

##### POST

- http://localhost:4000/api/v1/admin

##### PUT

- http://localhost:4000/api/v1/admin/:bookingId

##### DELETE

- http://localhost:4000/api/v1/admin/:bookingId

### Booker

##### GET

- http://localhost:4000/api/v1/booker
- http://localhost:4000/api/v1/booker/6488637682ce5203a6fd32ac

##### POST

- http://localhost:4000/api/v1/booker

##### DELETE

- http://localhost:4000/api/v1/booker/:bookingId

## Criterias for passing the assignment

- A functioning application with all pages set up using React Router.
- The search page contains a text input (or optional presentation) and a button for searching (if needed).
- The search should be done through an API call.
- The result should be presented, preferably through a radio button list or a dropdown menu.
- An API call should be made to save the booking in the database.
- The administration interface is included.
- View bookings
- Delete bookings
- Modify bookings - optional (at least one of two)
- Create bookings - optional (at least one of two)
- Filter bookings
- The code should be well-thought-out and have a clear structure.
- The file structure in the project should be sound.
- Forms include validation and error messages.
- Able to handle bookings of more than 6 people.
- Use CSS/SCSS to create animations for loading and bookings, for example.
- Handle cancellations as a customer - optional (at least one of two)
- Send confirmation and cancellation emails to the user - optional (at least one of two)

## Conventional commits

- FIX: fixing a bug
- REFACTOR: rewriting/restructuring the code, without changing any behaviour
- FEATURE: adding a new feature
- DOCS: documentation changes
  BUILD: changes that affect the build system or external dependencies
  STYLE: style changes
