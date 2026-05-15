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
            display: block;
            --height-of-loader: 4px;
            --loader-color: #0071e2;
            width: 130px;
            height: var(--height-of-loader);
            border-radius: 30px;
            background-color: rgba(0, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
          }

          .loader::before {
            content: "";
            position: absolute;
            background: var(--loader-color);
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            border-radius: 30px;
            animation: moving 1s ease-in-out infinite;
          }

          @keyframes moving {
            50% {
              width: 100%;
            }

            100% {
              width: 0;
              right: 0;
              left: unset;
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
            style={{width: 260, height: 50, backgroundColor: 'transparent'}}
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
