import { StyleSheet, Platform } from 'react-native'

import colors from '../../assets/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === 'ios' ? colors.primary : colors.background,
  },

  teachersContainer: {
    paddingBottom: '200%',
    backgroundColor: colors.background,
  },

  teacherList: {
    marginTop: -40,
  },

  searchForm: {
    marginBottom: 24,
  },

  label: {
    color: colors.textInPrimary,
    fontFamily: 'Poppins_400Regular',
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlock: {
    width: '48%',
  },

  input: {
    height: 54,
    backgroundColor: colors.inputBackground,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  submitButton: {
    backgroundColor: colors.secondary,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    color: colors.buttonText,
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },
})

export default styles
