import { useIntersectionObserver } from "@vueuse/core"

export const lazyPlugin = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            console.log('6')
            el.src = binding.value
            stop()
          }
        })
      }
    })
  }
}