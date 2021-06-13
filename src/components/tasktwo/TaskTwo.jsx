import React from 'react';
import {
  Content,
  DesignList,
  Heading,
  StyledList,
  Task
} from '@components/styled-components/Task';

const modals = [
  {
    title: 'Data loading modal: ',
    alt: 'Data loading modal',
    src: 'images/data_loading.png'
  },
  {
    title: 'Delete files modal: ',
    alt: 'Delete files modal',
    src: 'images/delete_files.png'
  },
  {
    title: 'Delete report and history modal: ',
    alt: 'Delete report and history modal',
    src: 'images/delete_report_and_history.png'
  },
];

const TaskTwo = () => (
  <Task>
    <Heading>Task Two</Heading>
    <Content>
      <h4>Complete the following task:</h4>
      <p>
        This is to assess your ability to design and build React components.
        Assume that you are part of a team starting a new project,
        a consistent design language has been set by the Design Team,
        i.e. fonts, labels, button and input styles etc. Below are
        designs for some components for you to build. With unit tests
        and without 3rd party modal packages, build the modals shown in
        these designs and have re-usability in mind as what you build
        might be re-usable in other parts of the application.
      </p>
      <p>
        {`Include unit tests. React Testing Library is already 
          configured for you in the skeleton project.`}
      </p>
      Expected:
      <StyledList type="1">
        <li>
          <strong>No </strong>
          backdrop/page overlay is required for this exercise.
        </li>
        <li>All modals should expose a mechanism to allow them to be closed.</li>
        <li>There should be a way to consume button click events on modals with buttons.</li>
        <li>Create a demo page with three buttons that trigger each of the modals to show.</li>
      </StyledList>
      <DesignList>
        {modals.map(({ title, alt, src }, index) => (
          <div key={index.toString()}>
            <label htmlFor={`img-${index}`}>
              {title}
            </label>
            <img
              alt={alt}
              src={src}
              id={`img-${index}`}
            />
          </div>
        ))}
      </DesignList>
      <hr />
      <strong>
        Feel free to use this component as a demo page for your work.
      </strong>
    </Content>
  </Task>
);

export default TaskTwo;
