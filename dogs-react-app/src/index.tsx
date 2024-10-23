import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

document.querySelectorAll('.hover-image').forEach((item) => {
	item.addEventListener('mouseover', (event) => {
		const target = event.target as HTMLElement | null;
		if (target) {
			const imageUrl = target.getAttribute('data-image');
			target.style.setProperty('--hover-image-url', `url(${imageUrl})`);
		}
	});

	item.addEventListener('mouseout', (event) => {
		const target = event.target as HTMLElement | null;
		if (target) {
			target.style.setProperty('--hover-image-url', '');
		}
	});
});
