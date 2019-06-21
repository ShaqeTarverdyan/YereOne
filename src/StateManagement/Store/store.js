// import rootReducer from '../Reducers/rootReducer';
import reducerBanner from '../Reducers/reduerBanner';
import reducerService from '../Reducers/reducerService';
import reducerWorks from '../Reducers/reducerWorks';
import { createStore,applyMiddleware ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as queries from '../Actions/actions';

const rootReducer = combineReducers({
    reducerBanner,
    reducerService,
    reducerWorks
})
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;
