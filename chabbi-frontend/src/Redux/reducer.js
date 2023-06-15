const initialState =
  "As a jazz flak, Jack falls flat. Sad jazz lacks fad fads. Lad lacks a flask, a flask Jack had, alas! A jazz lad flasks as fads fall. Jack, a lad, slacks, fad lass! A sad fad slacks as Jack flasks. A flask lad flasks, jazz falls flat, alas; As a jazz flak, Jack falls flat. Sad jazz lacks fad fads. Lad lacks a flask, a flask Jack had, alas! A jazz lad flasks as fads fall. Jack, a lad, slacks, fad lass! A sad fad slacks as Jack flasks. A flask lad flasks, jazz falls flat, alas! As a jazz flak, Jack falls flat. Sad jazz lacks fad fads. Lad lacks a flask, a flask Jack had, alas! A jazz lad flasks as fads fall. Jack, a lad, slacks, fad lass! A sad fad slacks as Jack flasks. A flask lad flasks, jazz falls flat, alas! As a jazz flak, Jack falls flat. Sad jazz lacks fad fads. Lad lacks a flask, a flask Jack had, alas! A jazz lad flasks as fads fall. Jack, a lad, slacks, fad lass! A sad fad slacks as Jack flasks. A flask lad flasks, jazz falls flat, alas, As a jazz flak, Jack falls flat. Sad jazz lacks fad fads. Lad lacks a flask, a flask Jack had, alas! A jazz lad flasks as fads fall. Jack, a lad, slacks, fad lass! A sad fad slacks as Jack flasks. A flask lad flasks, jazz falls flat, alas! As a jazz flak, Jack falls flat. Sad jazz lacks fad fads. Lad lacks a flask, a flask Jack had, alas! A jazz lad flasks as fads fall. Jack, a lad, slacks, fad lass! A sad fad slacks as Jack flasks. A flask lad flasks, jazz falls flat, alas! As a jazz flak, Jack falls flat. Sad jazz lacks fad fads. Lad lacks a flask, a flask Jack had, alas! A jazz lad flasks as fads fall. Jack, a lad, slacks, fad lass! A sad fad slacks as Jack flasks. A flask lad flasks, jazz falls flat, alas! As a jazz flak, Jack falls flat. Sad jazz lacks fad fads. Lad lacks a flask, a flask Jack had, alas! A jazz lad flasks as fads fall. Jack, a lad, slacks, fad lass! A sad fad slacks as Jack flasks. A flask lad flasks, jazz falls flat, alas! As a jazz flak, Jack falls flat. Sad jazz lacks fad fads. Lad lacks a flask, a flask Jack had, alas! A jazz lad flasks as fads fall. Jack, a lad, slacks, fad lass! A sad fad slacks as Jack flasks. A flask lad flasks, jazz falls flat, alas! As a jazz flak, Jack falls flat. Sad jazz lacks fad fads. Lad lacks a flask, a flask Jack had, alas! A jazz lad flasks as fads fall. Jack, a lad, slacks, fad lass! A sad fad slacks as Jack flasks. A flask lad flasks, jazz falls flat, alas! As a jazz flak, Jack falls flat. Sad jazz lacks fad fads. Lad lacks a flask, a flask Jack had, alas! A jazz lad flasks as fads fall. Jack, a lad, slacks, fad lass! A sad fad slacks as Jack flasks. A flask lad flasks, jazz falls flat, alas!";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE":
      return (state = action.data);
    case "RESET":
      return (state = initialState);
    default:
      return state;
  }
};

export default reducer;
