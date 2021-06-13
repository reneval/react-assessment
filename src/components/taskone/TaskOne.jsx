import React from 'react';
import { Content,
  Heading,
  StyledList,
  Task
} from '@components/styled-components/Task';
import UserList from '@components/taskone/UserList'

const TaskOne = () => (
  <Task>
    <Heading>Task One</Heading>
    <UserList />
    <Content>
      <h4>Complete the following task:</h4>
      <p>
        This task is to solve some bugs. There are bugs in the UserList React Class
        Component that is preventing the behaviour described below from working correctly.
        Fix the bugs and feel free to make improvements.
      </p>
      <p>Include unit tests. React Testing Library is already configured for you in the skeleton project.</p>
      Expected:
      <StyledList type="1">
        <li>
          {
              `When using the filter to search for a username, the API request should be
               triggered after a 5 second debounce.`
            }
        </li>
        <li>
          {
              `Reduce the number of re-renders by converting the UserList React Class Component
               to a React functional component, exposing custom hooks where appropriate.`
            }
        </li>
      </StyledList>
    </Content>
  </Task>
);

export default TaskOne;
