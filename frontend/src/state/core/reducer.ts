import { IAction } from "../IAction";

export type CoreState = {
  langDropdown: boolean;
};

const initialState: CoreState = {
  langDropdown: false,
};

const coreReducer = (state = initialState, action: IAction): CoreState => {
  const { langDropdown } = state;

  switch (action.type) {
    case "SET_LANG_DROPDOWN":
      console.log("hi")
      return {
        langDropdown: !langDropdown,
      };
    default:
      return state;
  }
};

export default coreReducer;
