import { useState } from 'react';
import axios from 'axios';
import './tailwind.css';
import './App.css';

function App() {
	// const [submitted, setSubmitted] = useState<boolean>(false);
	// const [email, setEmail] = useState<string>('');

	// const submitSubscriptionRequest = async (e: any) => {
	// 	console.log(e);
	// 	e.preventDefault();
	// 	const resp = await axios.post(
	// 		'https://hooks.zapier.com/hooks/catch/14021157/bnzmcix/',
	// 		{ email: email }
	// 	);
	// 	console.log(resp);
	// };
	return (
		<div className=" flex align-middle justify-center flex-col">
			<div className="w-full flex justify-center">
				<a href="https://vitejs.dev" target="_blank">
					<img src="/crab.png" className="logo" alt="Vite logo" />
				</a>
			</div>
			<h1>Want to learn Rust is 30 days</h1>
			<p>
				Don't worry. I have no idea what I am doing and that's okay. Let's keep
				it fun and learn together 😁
			</p>
			{/* <form onSubmit={(e) => submitSubscriptionRequest(e)}> */}
			{/* <input
					name="email"
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					className="p-2 mt-6 w-72 text-center"></input> */}
			<div className="card">
				<button>
					<a href="https://sendfox.com/rustin30days">Sign-up!</a>
				</button>
			</div>
			<h2 className="font-bold text-lg">#rust30</h2>
			{/* </form> */}
			<div className="hidden">
				<a rel="me" href="https://hachyderm.io/@AvidDabbler">
					Mastodon
				</a>
			</div>
		</div>
	);
}

export default App;
