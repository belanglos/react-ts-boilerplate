import React from 'react';
import OrganisationSearch from '../OrganisationSearch';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

describe("Organisation component", () => {
	it("displays the organisation's name", () => {
		render(<OrganisationSearch/>);
		
		expect(screen.getByText("Organisation Search")).toBeInTheDocument();
	})
});