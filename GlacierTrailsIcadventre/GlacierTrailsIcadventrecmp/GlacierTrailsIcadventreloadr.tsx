import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import WebView from 'react-native-webview';

const wudlanndvildexplorrhtmlloader = `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      overflow: hidden;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .loader {
      width: 44.8px;
      height: 44.8px;
      color: #554cb5;
      position: relative;
      background: radial-gradient(11.2px, currentColor 94%, #0000);
    }

    .loader:before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background:
        radial-gradient(10.08px at bottom right, #0000 94%, currentColor) top left,
        radial-gradient(10.08px at bottom left, #0000 94%, currentColor) top right,
        radial-gradient(10.08px at top right, #0000 94%, currentColor) bottom left,
        radial-gradient(10.08px at top left, #0000 94%, currentColor) bottom right;
      background-size: 22.4px 22.4px;
      background-repeat: no-repeat;
      animation: loader 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
    }

    @keyframes loader {
      33% {
        inset: -11.2px;
        transform: rotate(0deg);
      }

      66% {
        inset: -11.2px;
        transform: rotate(90deg);
      }

      100% {
        inset: 0;
        transform: rotate(90deg);
      }
    }
  </style>
</head>
<body>
  <div class="loader"></div>
</body>
</html>`;

const GlacierTrailsIcadventreloadr = () => {
  const wudlanndvildexplorrNavigation = useNavigation();

  useEffect(() => {
    const wudlanndvildexplorrTimer = setTimeout(() => {
      wudlanndvildexplorrNavigation.navigate(
        'GlacierTrailsIcadventreonb' as never,
      );
    }, 6000);

    return () => {
      clearTimeout(wudlanndvildexplorrTimer);
    };
  }, [wudlanndvildexplorrNavigation]);

  return (
    <ImageBackground
      source={require('../../assets/imgs/glaciertrailsIcadvloadbg.png')}
      style={styles.wudlanndvildexplorrimageBg}>
      <ScrollView
        contentContainerStyle={styles.wudlanndvildexplorrscrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.wudlanndvildexplorrbottomWrap}>
          <WebView
            source={{html: wudlanndvildexplorrhtmlloader}}
            scrollEnabled={false}
            originWhitelist={['*']}
            style={{width: 260, height: 100, backgroundColor: 'transparent'}}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default GlacierTrailsIcadventreloadr;

const styles = StyleSheet.create({
  wudlanndvildexplorrimageBg: {
    flex: 1,
  },
  wudlanndvildexplorrscrollContent: {
    flexGrow: 1,
  },

  wudlanndvildexplorrbottomWrap: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    paddingBottom: 40,
  },
});
