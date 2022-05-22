import React from 'react'
import './filter.css'
import Angular from '../../assets/img/angular.png'
import Reacts from '../../assets/img/reacts.png'
import Vues from '../../assets/img/vues.png'

const Filter = ({ setName, tech }) => {

  const options = document.querySelector('#options');
  const containerSelect = document.querySelector('#select .container-select');
  const hiddenInput = document.querySelector('#inputSelect')  
  
  //Agregar clase que muestra las opciones cada vez que selecionamos el select
  const optionsShow = () => {
	options.classList.toggle('active')
  }

  //Para que al seleccionar una opcion ocupe el lugar de la cada del select y a la vez actualice la API
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
    <section className='container__filter'>
        <form action="">
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