// import rootReducer from '../Reducers/rootReducer';
import reducerBanner from '../Reducers/reduerBanner';
import reducerService from '../Reducers/reducerService';
import reducerHomePage from '../Reducers/reducerHomePage';
import { createStore,applyMiddleware ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as queries from '../Actions/actions';

const rootReducer = combineReducers({
    reducerBanner,
    reducerService,
    reducerHomePage
})
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;
