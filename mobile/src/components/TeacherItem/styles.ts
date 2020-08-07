import { StyleSheet } from 'react-native'

import colors from '../../assets/colors'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.boxBase,
    borderWidth: 1,
    borderColor: colors.lineInWhite,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.inputBackground,
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: 'Archivo_700Bold',
    color: colors.textTitle,
    fontSize: 20,
  },

  subject: {
    fontFamily: 'Poppins_400Regular',
    color: colors.textBase,
    fontSize: 12,
    marginTop: 4,
  },

  bio: {
    margin: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: colors.textBase,
  },

  footer: {
    backgroundColor: colors.boxFooter,
    padding: 24,
    alignItems: 'center',
    marginTop: 24,
  },

  price: {
    fontFamily: 'Poppins_400Regular',
    color: colors.textBase,
    fontSize: 14,
  },

  priceValue: {
    fontFamily: 'Archivo_700Bold',
    color: colors.primary,
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  favoriteButton: {
    backgroundColor: colors.primary,
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  favorite: {
    backgroundColor: '#e33d3d',
  },

  contactButton: {
    backgroundColor: colors.secondary,
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  contactButtonText: {
    color: colors.titleInPrimary,
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    marginLeft: 16,
  },
})

export default styles
