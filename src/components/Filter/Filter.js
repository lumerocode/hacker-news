import React from 'react'
import './filter.css'
import Angular from '../../assets/img/angular.png'
import Reacts from '../../assets/img/reacts.png'
import Vues from '../../assets/img/vues.png'

const Filter = () => {

  return (
    <section className='container__filter'>
        <form action="">
			<div className="selectbox">
				<div className="select" id="select">
					<div className="contenido-select">
						<h1 className="titulo">Select your news</h1>
					</div>
					<i className="fas fa-angle-down"></i>
				</div>

				<div className="opciones" id="opciones">
					<a href="#" className="opcion">
						<div className="contenido-opcion">
							<img src={Angular} alt=""/>
							<div className="textos">
								<h1 className="titulo">Angular</h1>
							</div>
						</div>
					</a>
					<a href="#" className="opcion">
						<div className="contenido-opcion">
							<img src={Reacts} alt=""/>
							<div className="textos">
								<h1 className="titulo">Reacts</h1>
							</div>
						</div>
					</a>
					<a href="#" className="opcion">
						<div className="contenido-opcion">
							<img src={Vues} alt=""/>
							<div className="textos">
								<h1 className="titulo">Vues</h1>
							</div>
						</div>
					</a>
				</div>
			</div>

			<input type="hidden" name="pais" id="inputSelect" value=""/>
		</form>
    </section>
  )
}

export default Filter