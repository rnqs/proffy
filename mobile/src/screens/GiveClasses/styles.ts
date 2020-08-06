import { StyleSheet } from 'react-native'
import colors from '../../assets/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
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

  okButton: {
    marginBottom: 40,
    backgroundColor: colors.secondary,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  backButton: {
    marginBottom: 20,
    backgroundColor: colors.primaryLighter,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
  },
})

export default styles
