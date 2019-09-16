import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => {

	return (
		<Helmet
			title={`${title}`}
			meta={[
				{ name: 'description', content: 'Portfolio de Julien Queffelec' },
				{ name: 'keywords', content: 'portflio, julien queffelec' }
			]}
		>
			<html lang="fr" />
		</Helmet>
	);

};

export default Head;
