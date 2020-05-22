window.jQuery = function (selectorOrArray) {
  let elements
  if (typeof selectorOrArray === 'string') {
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  }

  // api能够操作elements
  // const api = {
  //   // addClass(className){} ==="addClass":function(className){}
  //   addClass(className) {
  //     for (let i = 0; i < elements.length; i++) {
  //       elements[i].classList.add(className)
  //     }
  //     return this;
  //   }
  // }
  // return api;

  return {
    // addClass(className){} ==="addClass":function(className){}
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className)
      }
      return this;
    },

    oldApi: selectorOrArray.oldApi,

    find(selector) {
      let array = []
      for (let i = 0; i < elements.length; i++) {
        const elements1 = Array.from(elements[i].querySelectorAll(selector));
        array = array.concat(elements1);
      }
      // const newApi = jQuery(array);
      // return newApi;
      array.oldApi = this;
      return jQuery(array);
    },

    each(fn) {
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i)
      }
      return this;
    },

    parent() {
      const array = []
      this.each((node) => {
        if (array.indexOf(node.parentNode) === -1) {
          array.push(node.parentNode)
        }

      })
      return jQuery(array);
    },

    children() {
      const array = []
      this.each((node) => {
        //把数组展开
        array.push(...node.children)
      })
      return jQuery(array);
    },

    print() {
      console.log(elements)
    },





    end() {
      return this.oldApi;
    }




  }

}