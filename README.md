# Pizza Delivery App

A food ordering mobile app built with React Native (Expo) on the front end and Strapi as a headless CMS/API backend. Users browse categories (pizza, burgers, sushi, salads, kebabs), view item details, sign up/log in, place an order, and track it through "ongoing" and "order history" screens.

**Stack:** React Native (Expo SDK 42) · React Navigation · Formik/Yup · Strapi 3 (Node.js headless CMS) · SQLite

## Structure

```
Website/     React Native / Expo app (screens, navigation, forms, components)
DB/pizza_db/ Strapi backend (content types: members, pizza-data, pizza-delivery)
```

## Running the App

**Backend (Strapi):**
```bash
cd DB/pizza_db
npm install
npm run develop
```
Strapi admin runs on `http://localhost:1337/admin`.

**Frontend (Expo):**
```bash
cd Website
npm install
expo start
```
Scan the QR code with the Expo Go app, or run `expo start --android` / `--ios` / `--web`.

## Features

- Onboarding flow
- Sign up / log in / verify
- Browse by category, view item details
- Place an order, track ongoing orders and order history
