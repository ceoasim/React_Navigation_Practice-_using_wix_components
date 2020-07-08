import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent(
    'blog.Tour',
    () => require('./src/Tour').default,
  );
  Navigation.registerComponent(
    'blog.Frontheader',
    () => require('./src/Frontheader').default,
  );
  Navigation.registerComponent(
    'blog.Signin',
    () => require('./src/Signin').default,
  );
}
