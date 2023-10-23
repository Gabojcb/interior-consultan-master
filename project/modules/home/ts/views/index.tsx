import * as React from 'react';
import { Navigation } from 'project/nav';
import { Header } from 'project/header';
import { Main } from 'project/main';
import { Footer } from 'project/footer';
export /*bundle*/
function Page(): JSX.Element {
	const TITLE__HEADER = 'Modern interior';
	return (
		<div className='page__container'>
			<Navigation />
			<div className='content-grid'>
				<Header title={TITLE__HEADER}>
					A full-Service residential & commercial interior design and staging company offering professional
					organizing & eco-services.
				</Header>
				<Main />
			</div>
			<Footer />
		</div>
	);
}
