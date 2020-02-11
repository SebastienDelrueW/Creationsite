class Carousel {

    /**
     * @param {HTMLElement} element 
     * @param {Object} options 
     * @param {Object} options.slidesToScroll nombre d'éléments à faire défiler
     * @param {Object} options.slidesVisible nombre d'éléments visibles dans un slide
     */

    constructor(element, options = {}) {
        this.element = element
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1
        }, options)
        this.children = [].slide.call(element.children)
        let root = this.createDivWithClass('carousel')
        let container = this.createDivWithClass('carousel__container')
        root.appendChild(container)
        this.element.appendChild(root)
        this.children.forEach(function(child) {
            let item = this.createDivWithClass('carousel__item')
            item.appendChild(child)
            container.appendChild(child)
        })
    }

    /**
     * 
     * @param {string} className 
     * @returns {HTMLElement} 
     *  
     */
    createDivWithClass(className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }
}

document.addEventListener('DOMContentLoad', function() {

    new Carousel(document.querySelector('#carousel1'), {
        slidesToScroll: 3,
        slidesVisible: 3
    })
})