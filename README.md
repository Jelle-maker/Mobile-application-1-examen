# Mobile-application-1-examen

Small mobile app using Expo that shows a list of products from Fake Store API.
Demonstrates tabs + stack navigation, FlashList, API calls, search/sort/filter,
and detail views.

## API
- List: https://fakestoreapi.com/products
- Detail: https://fakestoreapi.com/products/:id

## Install
1. npx create-expo-app --template blank
2. npm install
3. npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack @shopify/flash-list
4. npx expo install react-native-screens react-native-safe-area-context
5. npm start

## Search / Sort
- Live search on title
- Sort A–Z, price ↑, price ↓
- Filter by category

## Run