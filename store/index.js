export const state = () => ({
  drawForm: false,
  isMenuCollapse: false,
  cashier: null,
  walletBalance: 0
})
export const getters = {
  drawForm: state => state.drawForm,
  isMenuCollapse: state => state.isMenuCollapse,
  cashier: state => state.cashier,
  walletBalance: state => state.walletBalance
}
export const mutations = {
  setDrawForm (state, payload) {
    state.drawForm = payload
  },
  setMenu (state, payload) {
    state.isMenuCollapse = payload
  },
  setCashier (state, payload) {
    state.cashier = payload
  },
  setWalletBalance (state, payload) {
    state.walletBalance = payload
  }
}
