import React from 'react'
import './filter.css' //Importamos estilos
import Angular from '../../assets/img/angular.png' //Importamos imagen
import Reacts from '../../assets/img/reacts.png' //Importamos imagen
import Vues from '../../assets/img/vues.png' //Importamos imagen

const Filter = ({ setName, tech }) => {

  const options = document.querySelector('#options'); //Capturamos el target de la etiqueta que tiene como id 'options'
  const containerSelect = document.querySelector('#select .container-select'); //Capturamos el target de la etiqueta que tiene como clase 'container-select'
  const hiddenInput = document.querySelector('#inputSelect') //Capturamos el target de la etiqueta que tiene como id 'inputselect'
  
  //Agregar clase que muestra las opciones cada vez que selecionamos el select
  const optionsShow = () => {
	options.classList.toggle('active')
  }

  //Para que al seleccionar una opcion ocupe el lugar de la cada del select y a la vez actualice la API ya sea por 'Angular', 'Reacts' o 'Vues' 
  const inputShow = (e) => {
	e.preventDefault()
	containerSelect.innerHTML = e.currentTarget.innerHTML;
	hiddenInput.value = e.currentTarget.querySelector('.title').innerText;

	if ((e.currentTarget.querySelector('.title').innerText) === "Angular"){
	 	setName(tech[0])
	 } else if ((e.currentTarget.querySelector('.title').innerText) === "Reacts"){
		setName(tech[1])
	 } else {
		setName(tech[2])
	 }

  }

  return (
	//Contenemods del filtro
    <section className='container__filter'>
        <form action="">
			{/* Select */}
			<div className="selectbox" onClick={optionsShow}>
				<div className="select" id="select">
					<div className="container-select">
						<h1 className="title">Select your news</h1>
					</div>
					<i className="fas fa-angle-down"></i>
				</div>

				{/* Options */}
				<div className="options" id="options">
					<a	 href="#" 
						className="option" 
						name="angular" 
						onClick={inputShow}>
						<div className="container-option">
							<img src={Angular} alt=""/>
							<div className="text">
								<h1 className="title" value=''>Angular</h1>
							</div>
						</div>
					</a>
					<a href="#" className="option" name="reacts" onClick={inputShow}>
						<div className="container-option">
							<img src={Reacts} alt=""/>
							<div className="text">
								<h1 className="title">Reacts</h1>
							</div>
						</div>
					</a>
					<a href="#" className="option" name="vues" onClick={inputShow}>
						<div className="container-option">
							<img src={Vues} alt=""/>
							<div className="text">
								<h1 className="title">Vues</h1>
							</div>
						</div>
					</a>
				</div>
			</div>

			<input type="hidden" name="country" id="inputSelect" value=""/>
		</form>
    </section>
  )
}

export default Filter