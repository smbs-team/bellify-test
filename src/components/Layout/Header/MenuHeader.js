import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import TopbarHeader from './TopbarHeader';

import Logo from '../../../assets/images/logo.png';
import shop_bag from '../../../assets/images/icons/shop-bag.svg';
import heart from '../../../assets/images/icons/heart.svg';

const MenuHeader = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<TopbarHeader />
			<div className="Header-mainMenu">
				<Navbar expand="xl" dark>
					<NavbarBrand href="/">
						<NavLink>
							<img src={Logo} alt=""/>
						</NavLink>
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
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
								<NavLink>Productos</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>Bodas</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>Estilos</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>Blog</NavLink>
							</NavItem>
						</Nav>
						<Nav navbar>
							<NavItem>
								<NavLink>Iniciar Sesión</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="btn btn-purple Header-btnBooking">Reserva</NavLink>
							</NavItem>
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
						<NavLink>
							<img src={heart} alt=""/>
						</NavLink>
						<NavLink>
							<img src={shop_bag} alt=""/>
						</NavLink>
					</Collapse>
				</Navbar>
			</div>
		</div>
	);
}

export default MenuHeader;