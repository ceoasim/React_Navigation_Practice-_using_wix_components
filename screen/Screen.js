import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent(
    'blog.Info',
    () => require('./src/Info').default,
  );
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
  Navigation.registerComponent(
    'blog.Signup',
    () => require('./src/Signup').default,
  );
  Navigation.registerComponent(
    'blog.Reset',
    () => require('./src/Reset').default,
  );
  Navigation.registerComponent(
    'blog.Rawalakot',
    () => require('./src/Rawalakot').default,
  );
  Navigation.registerComponent(
    'blog.Tolipeer',
    () => require('./src/Tolipeer').default,
  );

  Navigation.registerComponent(
    'blog.Scroll',
    () => require('./src/Scroll').default,
  );
  Navigation.registerComponent(
    'blog.Sidebar',
    () => require('./src/Sidebar').default,
  );
  Navigation.registerComponent(
    'blog.Stars',
    () => require('./src/Stars').default,
  );
}
