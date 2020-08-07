import { StyleSheet } from 'react-native'

import colors from '../../assets/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 40,
  },

  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: colors.titleInPrimary,
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  },
})

export default styles
