import './App.css';
function App() {
	return (
		<div>
			<div className="header">
				<h1 className="rainbow-text custom-font">Adogption</h1>
				<p>Your best option for adoption</p>
			</div>
			<video className="fullscreen-video" autoPlay muted loop>
				<source
					src="https://www.w3schools.com/html/mov_bbb.mp4"
					type="video/mp4"
				/>
			</video>
			<div className="content">
				<h2>Adopt a dog</h2>
				<p>
					We have a wide variety of dogs that are looking for a new home. You
					can find your new best friend here.
				</p>
				<div className="dogs-grid">
					<div className="dog">
						<img
							className="bounce"
							src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
							alt="dog"
						/>
						<p>What a cute dog!</p>
					</div>
					<div className="dog">
						<img
							className="bounce"
							src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
							alt="dog"
						/>
						<p>What a cute dog!</p>
					</div>
					<div className="dog">
						<img
							className="bounce"
							src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
							alt="dog"
						/>
						<p>What a cute dog!</p>
					</div>
					<div className="dog">
						<img
							className="bounce"
							src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
							alt="dog"
						/>
						<p>What a cute dog!</p>
					</div>
					<div className="dog">
						<img
							className="bounce"
							src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
							alt="dog"
						/>
						<p>What a cute dog!</p>
					</div>
					<div className="dog">
						<img
							className="bounce"
							src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
							alt="dog"
						/>
						<p>What a cute dog!</p>
					</div>
				</div>
			</div>

			<img src="Considerations-Before-Getting-a-Dog.png" alt="title" />
			<ul className="styled-list">
				<li>
					Do you have enough room for your new furry roommate? Remember, they
					need space to spread out their toys... and chaos!
				</li>
				<li>
					Are you prepared for the daily walks? Because your couch will start
					looking less inviting once that leash is in hand.
				</li>
				<li>
					Can you handle the shedding? You might discover that "dog hair" is now
					considered an accessory.
				</li>
				<li>
					Will your furniture survive? A puppy's idea of "decorating" often
					involves chewing on your favorite chair.
				</li>
				<li>
					Do you have a budget for treats? Spoiling them with gourmet snacks is
					basically part of the job description.
				</li>
				<li>
					Are you ready for the vet visits? Your wallet might feel lighter after
					those check-ups!
				</li>
				<li>
					Can you resist those puppy eyes when they beg for food at dinner time?
					Spoiler alert: You won't be able to.
				</li>
				<li>
					Do you have time for training sessions? Because teaching “sit” can
					sometimes feel like you're trying to teach quantum physics!
				</li>
				<li>
					Aren't you worried about becoming a dog parent on social media? Get
					ready to post endless pictures of your new best friend!
				</li>
				<li>
					Lastly, are you prepared to love unconditionally and be adored in
					return (even if it's just because you have treats)?
				</li>
			</ul>
		</div>
	);
}

export default App;
