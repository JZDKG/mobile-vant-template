import { Toast, Notify, Dialog } from 'vant'

const install = (Vue, opts = {}) => {
  /* 全局Notify */
  Vue.prototype.$baseNotify = (message, type) => {
    Notify({
      message: message,
      type: type,
      duration: 3000,
    })
  }
  /* 全局TableHeight */
  Vue.prototype.$baseWindowHeight = () => {
    return window.innerHeight
  }
  /* 全局Toast */
  Vue.prototype.$baseToast = (message, type) => {
    Toast({
      message: message,
      type: type,
      duration: 2000,
    })
  }
  /* 全局Dialog */
  Vue.prototype.$baseDialog = (title, message, btnMsg) => {
    Dialog.alert({
      title: title,
      message: message,
      confirmButtonColor: '#459ac6',
      confirmButtonText: btnMsg,
    }).then(() => {
      // on close
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
