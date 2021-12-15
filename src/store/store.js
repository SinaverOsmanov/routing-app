const initialState = {
  route: "/main",
  nodes: [],
  title: "Main",
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      return state;
    default:
      return state;
  }
}
