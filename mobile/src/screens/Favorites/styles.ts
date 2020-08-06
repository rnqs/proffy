import { StyleSheet } from 'react-native'
import colors from '../../assets/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 40,
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: colors.titleInPrimary,
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  description: {
    marginTop: 24,
    color: colors.textInPrimary,
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240,
  },

  test: {
    width: '100%',
    height: 150,
    backgroundColor: colors.background,
  },
})

export default styles
