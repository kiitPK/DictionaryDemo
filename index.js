/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import DictionaryDemo from './components/ApiDemo/dictionaryDemo';

AppRegistry.registerComponent(appName, () => DictionaryDemo);
