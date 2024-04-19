import * as React from "react";
import renderer from "react-test-renderer";
import { Text } from "react-native";

import Sidebar from "../Sidebar";

it(`renders correctly`, () => {
  const tree = renderer
    .create(
      <Sidebar>
        <Text>Bottom Text</Text>
      </Sidebar>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
