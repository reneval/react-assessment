import React, { Component } from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #000;
  padding: 20px;

  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const UserInfo = styled.div`
  border-right: 1px solid #000;
  text-align: left;
  width: 260px;
`;

const Users = styled.div`
  max-height: 300px;
  overflow: scroll;
  margin-top: 15px;
`;

const debounce = (func, wait = 5000) => {
  let timeout = null;

  const cleanup = () => {
    if (timeout) clearTimeout(timeout);
  };

  return () => {
    cleanup();

    timeout = setTimeout(func, wait);
  };
};

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filter: '',
      value: ''
    };
  }


  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { filter } = this.state;
    fetch(
      `https://jsonplaceholder.typicode.com/users${filter ? `?username=${encodeURIComponent(filter)}` : ''}`
    )
      .then(async (response) => {
        const data = await response.json();
        this.setState({ data });
      });
  }

  render() {
    const { data, value } = this.state;

    const setFilter = (e) => {
      this.setState({ value: e.target.value });
      const debounceFn = debounce((ev) => {
        this.setState({ filter: ev.target.value }, this.fetchData);
      });

      debounceFn(e);
    };

    return (
      <div>
        <div>
          Filter:
          <input
            type="text"
            onChange={setFilter}
            value={value}
            placeholder="Enter username"
          />
        </div>
        <Users>
          {data.map((user) => (
            <Row key={user.id}>
              <UserInfo>
                <span>{`Name: ${user.name}`}</span>
                <span>{`Username: ${user.username}`}</span>
              </UserInfo>
              <div>
                <div>
                  <span>{user.address.street}</span>
                  <span>{user.address.suite}</span>
                  <span>{user.address.city}</span>
                  <span>{user.address.zipcode}</span>
                </div>
                <div>
                  <span>{user.email}</span>
                  <span>{user.phone}</span>
                </div>
              </div>
            </Row>
          ))}
        </Users>
      </div>
    );
  }
}
