// Variables.js
import { Dimensions, Platform, StatusBar } from 'react-native';

// Kích thước màn hình cố định
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen');

// Base width để scale
const guidelineBaseWidth = Platform.OS === 'ios' ? 375 : 360;

// Hàm scale
const scaleSize = (size: number) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const Variables = {
  sizes: {
    WIDTH: WINDOW_WIDTH,
    HEIGHT: WINDOW_HEIGHT,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    ASPECT_RATIO: WINDOW_HEIGHT / WINDOW_WIDTH,
    STATUS_BAR_HEIGHT: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
    scale: scaleSize,
  },
  spacing: {
    tiny: scaleSize(4),
    small: scaleSize(8),
    regular: scaleSize(16),
    medium: scaleSize(24),
    large: scaleSize(32),
  },
  fontSize: {
    small: scaleSize(12),
    regular: scaleSize(14),
    medium: scaleSize(16),
    large: scaleSize(20),
    xlarge: scaleSize(24),
  },
  borderRadius: {
    small: 4,
    regular: 8,
    medium: 12,
    large: 16,
    round: 999,
  },
};
