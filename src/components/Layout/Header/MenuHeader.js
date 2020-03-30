import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,  
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import TopbarHeader from './TopbarHeader';

import Logo from '../../../assets/images/logo.png';
import shop_bag from '../../../assets/images/icons/shop-bag.svg';
import heart from '../../../assets/images/icons/heart.svg';
import { Link } from 'react-router-dom';

const MenuHeader = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<TopbarHeader />
			<div className="Header-mainMenu">
				<Navbar expand="xl" dark>
					<NavbarBrand href="/">
						<img src={Logo} alt="" className="Header-logo"/>
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="m-auto" navbar>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Servicios
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Peluqueria
									</DropdownItem>
									<DropdownItem>
										Maquillaje
									</DropdownItem>
									<DropdownItem>
										Uñas
									</DropdownItem>
									<DropdownItem>
										Estetica
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
							<NavItem>
								<Link className="nav-link" to="">Productos</Link>
							</NavItem>
							<NavItem>
								<Link className="nav-link" to="">Bodas</Link>
							</NavItem>
							<NavItem>
								<Link className="nav-link" to="">Estilos</Link>
							</NavItem>
							<NavItem>
								<Link className="nav-link" to="">Blog</Link>
							</NavItem>
						</Nav>
						<Link className="d-block text-center nav-link">Iniciar Sesión</Link>
						<Link className="btn btn-purple Header-btnBooking">Reserva</Link>
						<Nav navbar>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Es
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										Es
									</DropdownItem>
									<DropdownItem>
										En
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
						<div className="text-center">
							<Link className="nav-link icon" to="">
								<img src={heart} alt=""/>
							</Link>
							<Link className="nav-link icon" to="">
								<img src={shop_bag} alt=""/>
							</Link>
						</div>
					</Collapse>
				</Navbar>
			</div>
		</div>
	);
}

export default MenuHeader;