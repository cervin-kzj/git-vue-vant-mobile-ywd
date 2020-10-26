const vueFocus = {}
vueFocus.install = (Vue) => {
    Vue.directive("focus", {
        inserted: (el) => {
            el.focus()
        }
    })
}
// Vue.use(install);
export default vueFocus

