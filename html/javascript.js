const element = document.getElementById( 'menu-button' );
const menuContainer = document.querySelector( '.menu' );

element.addEventListener( 'click', () => {

	if ( menuContainer.classList.contains( 'show-menu' ) ) {
		menuContainer.classList.remove( 'show-menu' );
	} else {
		menuContainer.classList.add( 'show-menu' );
	}

} );

class Modal {
	constructor( ) {
		this.joinButton = document.getElementById('join-button');
		this.form = document.getElementById( 'form');
		this.joinButton.addEventListener( 'click', () => {

		if ( this.form.classList.contains( 'show' ))	{
			this.form.classList.remove( 'show' );
		} else {
			this.form.classList.add( 'show' );	
		}
			console.log( 'hello' );
		} );

		this.closedForm();

	}
	closedForm( ) {
		this.closeButton = document.getElementById( 'close-button' );
		this.closeButton.addEventListener( "click", () => {
			if ( this.form.classList.contains( 'show' ))	{
				this.form.classList.remove( 'show' );
			} else {
				this.form.classList.add( 'show' );	
			}

		})
		console.log(this.closeButton);

		
	}

}

var modal = new Modal( );
console.log(modal);



