import { StyleSheet, StatusBar } from 'react-native'

import colors from '../../assets/colors'

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight || 0,
    height: 62 + (StatusBar.currentHeight || 0),
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    /*
      shadowColor: colors.primary,
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 1,
      shadowRadius: 5,
      elevation: 0,
    */
  },

  headerTitleStyle: { display: 'none' },
})

export default styles
