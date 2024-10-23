import './App.css';
function App() {
	return (
		<div>
			<div className="header">
				<h1 className="rainbow-text custom-font">Adogption</h1>
				<p>Your Best Option for Adoption</p>
			</div>
			<video className="fullscreen-video" autoPlay muted loop>
				<source
					src="https://www.w3schools.com/html/mov_bbb.mp4"
					type="video/mp4"
				/>
			</video>
			<div className="content">
				<div className="adopt">
					<h2>Adopt a dog</h2>
					<p>
						We have a wide variety of dogs that are looking for a new home. You
						can find your new best friend here.
					</p>
				</div>
				<div className="dogs-grid">
					<div className="dog">
						<img
							className="bounce"
							src="https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="dog"
						/>
						<p>You get three in one!</p>
					</div>
					<div className="dog">
						<img
							className="bounce"
							src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="dog"
						/>
						<p>What a cute dog!</p>
					</div>
					<div className="dog">
						<img
							className="bounce"
							src="https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="dog"
						/>
						<p>Sunshine bby!</p>
					</div>
					<div className="dog">
						<img
							className="bounce"
							src="https://images.unsplash.com/photo-1491604612772-6853927639ef?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="dog"
						/>
						<p>Why so serious?</p>
					</div>
					<div className="dog">
						<img
							className="bounce"
							src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="dog"
						/>
						<p>They are twinning.</p>
					</div>
					<div className="dog">
						<img
							className="bounce"
							src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=3062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="dog"
						/>
						<p>Always up for romance!</p>
					</div>
					<div className="dog">
						<img
							className="bounce"
							src="https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="dog"
						/>
						<p>What a cute dog!</p>
					</div>
					<div className="dog">
						<img
							className="bounce"
							src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="dog"
						/>
						<p>What a cute dog!</p>
					</div>
					<div className="dog">
						<img
							className="bounce"
							src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="dog"
						/>
						<p>What a cute dog!</p>
					</div>
					<div className="dog">
						<img
							className="bounce"
							src="https://images.unsplash.com/photo-1516366434321-728a48e6b7bf?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="dog"
						/>
						<p>How cute!</p>
					</div>
				</div>

				<div className="considerations">
					<img src="Considerations-Before-Getting-a-Dog.png" alt="title" />
					<ul className="styled-list">
						<li>
							Do you have enough room for your new furry roommate? Remember,
							they need space to spread out their toys... and chaos!
						</li>
						<li>
							Are you prepared for the daily walks? Because your couch will
							start looking less inviting once that leash is in hand.
						</li>
						<li>
							Can you handle the shedding? You might discover that "dog hair" is
							now considered an accessory.
						</li>
						<li>
							Will your furniture survive? A puppy's idea of "decorating" often
							involves chewing on your favorite chair.
						</li>
						<li>
							Do you have a budget for treats? Spoiling them with gourmet snacks
							is basically paxrt of the job description.
						</li>
						<li>
							Are you ready for the vet visits? Your wallet might feel lighter
							after those check-ups!
						</li>
						<li>
							Can you resist those puppy eyes when they beg for food at dinner
							time? Spoiler alert: You won't be able to.
						</li>
						<li>
							Do you have time for training sessions? Because teaching “sit” can
							sometimes feel like you're trying to teach quantum physics!
						</li>
						<li>
							Aren't you worried about becoming a dog parent on social media?
							Get ready to post endless pictures of your new best friend!
						</li>
						<li>
							Lastly, are you prepared to love unconditionally and be adored in
							return (even if it's just because you have treats)?
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
