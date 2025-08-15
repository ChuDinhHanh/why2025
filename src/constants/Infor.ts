import { Dimensions, Platform, StatusBar } from 'react-native';

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen');
const guidelineBaseWidth = Platform.OS === 'ios' ? 375 : 360;

const scaleSize = (size: number) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const AppInfo = {
  app: {
    name: 'Vì Sao',
    version: '1.0.0',
    build: '100',
  },
  device: {
    platform: Platform.OS,
    osVersion: Platform.Version,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    screenWidth: SCREEN_WIDTH,
    screenHeight: SCREEN_HEIGHT,
    statusBarHeight: Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 20,
    aspectRatio: WINDOW_HEIGHT / WINDOW_WIDTH,
  },
  constants: {
    defaultTimeout: 15000,
    maxUploadSize: 10 * 1024 * 1024,
  },
  sizes: {
    WIDTH: WINDOW_WIDTH,
    HEIGHT: WINDOW_HEIGHT,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    ASPECT_RATIO: WINDOW_HEIGHT / WINDOW_WIDTH,
    STATUS_BAR_HEIGHT: Platform.OS === 'android' ? StatusBar.currentHeight || 24 : 20,
    scale: scaleSize,
  },
};
