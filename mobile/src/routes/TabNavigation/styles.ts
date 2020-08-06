import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
  style: {
    elevation: 0,
    shadowOpacity: 0,
    height: Platform.OS === 'ios' ? 84 : 64,
  },
  tabStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
  },
  safeAreaInsets: {
    bottom: 0,
  },
  iconStyle: {
    flex: 0,
    width: 20,
    height: Platform.OS === 'ios' ? 24 : 20,
  },
  labelStyle: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 13,
    marginLeft: 16,
  },
})

export default styles
