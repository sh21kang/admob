import {
  AdMobBanner,
  AdMobInterstitial,
  AdMobRewarded,
  PublisherBanner,
} from 'expo-ads-admob';
import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-elements';
console.disableYellowBox = true;

AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
// AdMobInterstitial.setTestDeviceID('EMULATOR');
AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');
// AdMobRewarded.setTestDeviceID('EMULATOR');

class App extends Component {
  state = {
    disableInterstitialBtn: false,
    disableRewardedBtn: false,
  };

  _openInterstitial = async () => {
    try {
      this.setState({ disableInterstitialBtn: true });
      await AdMobInterstitial.requestAdAsync();
      await AdMobInterstitial.showAdAsync();
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ disableInterstitialBtn: false });
    }
  };

  _openRewarded = async () => {
    try {
      this.setState({ disableRewardedBtn: true });
      await AdMobRewarded.requestAdAsync();
      await AdMobRewarded.showAdAsync();
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ disableRewardedBtn: false });
    }
  };

  render() {
    const { disableInterstitialBtn, disableRewardedBtn } = this.state;
    return (
      <ScrollView>
        <SafeAreaView style={{ margin: 20 }}>
          <Text h2>GOOGLE ADMOB DEMO</Text>
          <Text>
            Set Ad Unit Id, Interstitial Id & Rewarded Id only on the top level
            component once.
          </Text>
          <Text h4>Banner Ad</Text>
          <AdMobBanner
            bannerSize='mediumRectangle'
            adUnitID={'ca-app-pub-3940256099942544/6300978111'}
          />
          <Text h4>Publisher Banner</Text>
          <PublisherBanner
            bannerSize='banner'
            adUnitID={'ca-app-pub-3940256099942544/6300978111'}
          />
          <Text h4>Interstitial Ad</Text>
          <Button
            title='Open'
            type='outline'
            disabled={disableInterstitialBtn}
            onPress={this._openInterstitial}
          />
          <Text h4>Rewarded Ad</Text>
          <Button
            title='Open'
            type='outline'
            disabled={disableRewardedBtn}
            onPress={this._openRewarded}
          />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default App;
