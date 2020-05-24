class StickyHeader {
    constructor() {
        this.header= document.getElementById( 'header' );
        console.log(this.header);
        this.addStickyHeaderEvent();
    }
    addStickyHeaderEvent() {
        window.addEventListener( 'scroll', () => {
            if (window.pageYOffset > this.header.offsetHeight) {
                this.header.classList.add( 'sticky' );
            } else {
                this.header.classList.remove( 'sticky' );
            }
        }       
        )

    }
        
}


var stickyHeader = new StickyHeader();

