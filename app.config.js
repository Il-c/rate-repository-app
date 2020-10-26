/* eslint-disable no-undef */
import 'dotenv/config';

export default {
  name: 'rate-repository-app',
  extra: {
    env: process.env.ENV,
    apolloUrl: process.env.APOLLO_URI,
  },
  slug: "rate-repository-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./logo192.png",
  splash: {
    image: "./logo192.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  updates: {
      "fallbackToCacheTimeout": 0
  },
  assetBundlePatterns: [
      "**/*"
  ],
  ios: {
    "bundleIdentifier": "com.ilari.repApp",
    "buildNumber": "1.0.0"
  },
  android: {
    "package": "com.ilari.repApp",
    "versionCode": 1
  },
  web: {
      "favicon": "./assets/favicon.png"
  }
};
/*{
  "expo": {
    "name": "rate-repository-app",
    "slug": "rate-repository-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/           /*      *"
    ],
    "ios": {
      "supportsTablet": true
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}*/
