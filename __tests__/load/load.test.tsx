import * as React from "react";
import { Load } from "../../src";
import { shallow } from "enzyme";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("Component loads simple promise", () => {
	const promiseMock = () => new Promise(resolve => resolve());

	const loader = shallow(
		<Load on={promiseMock}>
			{({ state, loaded, triggerLoad }) => {
				if (loaded) expect(state).toEqual("success");

				return (
					<>
						<h1>{state}</h1>
						<button onClick={triggerLoad} />
					</>
				);
			}}
		</Load>
	);

	expect(loader.text()).toEqual("idle");

	loader.find("button").simulate("click");
});
