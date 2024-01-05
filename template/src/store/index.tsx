import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import SignUpViewReducer from 'src/screens/SignUpView/reducer';
import StartViewReducer from 'src/screens/StartView/reducer';
import ForgotPasswordViewReducer from 'src/screens/ForgotPasswordView/reducer';
import SettingListViewReducer from 'src/screens/SettingListView/reducer';
import OtpViewReducer from 'src/screens/OtpView/reducer';

import HomeReducer from 'src/screens/HomeView/reducer';
import LoginReducer from 'src/screens/LoginView/reducer';
import TemplateReducer from 'src/screens/TemplateFolder/TemplatePageFolder/reducer';
import TemplateListReducer from 'src/screens/TemplateFolder/TemplateListFolder/reducer';

const Reducers = combineReducers({
  // write all the reduceres here
  homeReducer: HomeReducer,
  loginReducer: LoginReducer,
  templateReducer: TemplateReducer,
  templateListReducer: TemplateListReducer,
  signUpViewReducer: SignUpViewReducer,
  startViewReducer: StartViewReducer,
  forgotPasswordViewReducer: ForgotPasswordViewReducer,
  settingListViewReducer: SettingListViewReducer,
  otpViewReducer: OtpViewReducer,
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const Store = createStoreWithMiddleware(Reducers);

export default Store;
