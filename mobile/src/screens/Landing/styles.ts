import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../assets/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: colors.titleInPrimary,
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  bold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },

  button: {
    height: (Dimensions.get('window').width - 80) * 0.48,
    width: '48%',
    backgroundColor: colors.primaryLighter,
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonSecondary: {
    backgroundColor: colors.secondary,
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: colors.titleInPrimary,
    fontSize: 20,
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: colors.textInPrimary,
    fontSize: 12,
    lineHeight: 20,
    maxWidth: '48%',
    marginTop: 40,
  },
})

export default styles
