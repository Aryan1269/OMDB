import { configureStore } from "@reduxjs/toolkit";
import moiveReduer from "./reducers/Movies";
import tvReduer from "./reducers/tv";
import personReduer from "./reducers/person";


export default configureStore({
  reducer: {
    movie : moiveReduer,
    tv: tvReduer,
    person : personReduer
  },
});

