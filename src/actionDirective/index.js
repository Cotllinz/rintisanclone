const closeComponent = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      console.log(el == event.target)
      console.log(el.contains(event.target))
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted: (el) => {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}

export { closeComponent }
