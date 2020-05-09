const element = document.getElementById( 'menu-button' );
const menuContainer = document.querySelector( '.menu' );

element.addEventListener( 'click', () => {

	if ( menuContainer.classList.contains( 'show-menu' ) ) {
		menuContainer.classList.remove( 'show-menu' );
	} else {
		menuContainer.classList.add( 'show-menu' );
	}

} );
