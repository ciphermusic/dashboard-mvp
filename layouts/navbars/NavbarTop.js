// import node module libraries
import { Menu } from 'react-feather';
import { useEffect, useState } from 'react'
import Link from 'next/link';
import {
	Nav,
	Navbar,
	Form,
	Button
} from 'react-bootstrap';

// import sub components
import QuickMenu from 'layouts/QuickMenu';

import {supabase} from '../../data/utils/supabaseClient';

import { useRouter } from 'next/navigation';

const NavbarTop = (props) => {
	const [session, setSession] = useState(null);
	const router = useRouter();

	useEffect(() => {
		const fetchSession = async () => {
		  const { data, error } = await supabase.auth.getSession();
		  if (error) {
			console.log("Couldn't load session: " + error);
		  } else {
			setSession(data);
		  }
		};
	
		fetchSession();
	
		const { data } = supabase.auth.onAuthStateChange((event, session) => {
			setSession(session);
		});
	  }, []);

	const signOut = async () =>{
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log(error)
			return
		}

		console.log('signed out')
		router.push('/')
	}

	return (
		<Navbar expanded="lg" className="navbar-classic navbar navbar-expand-lg">
			<div className='d-flex justify-content-between w-100'>
				<div className="d-flex align-items-center">
					<Link
						href="#"
						id="nav-toggle"
						className="nav-icon me-2 icon-xs"
						onClick={() => props.data.SidebarToggleMenu(!props.data.showMenu)}>
						<Menu size="18px" />
					</Link>
					<div className="ms-lg-3 d-none d-md-none d-lg-block">
						{/* Search Form */}
						<Form className="d-flex align-items-center">
							<Form.Control type="search" placeholder="Search" />
						</Form>
					</div>
				</div>
				{/* Quick Menu */}
				<Nav className="navbar-right-wrap ms-2 d-flex nav-top-wrap">
				{!session ? (
					<div>
						<Link href="/authentication/sign-in" className="btn btn-white">
							Sign in
						</Link>
						<Link href="/authentication/sign-up" className="btn btn-white">
							Sign up
						</Link>
					</div>
				) : (
					<QuickMenu signOut={signOut}/>
				)}
					
				</Nav>
			</div>
		</Navbar>
	);

};

export default NavbarTop;
