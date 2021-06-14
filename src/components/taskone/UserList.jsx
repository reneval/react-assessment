import React, {
  useCallback, useEffect, useMemo, useState
} from 'react';
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

const debounce = (func, wait = 1000) => {
  let timeout = null;

  const cleanup = () => {
    if (timeout) clearTimeout(timeout);
  };

  return (...arg) => {
    cleanup();
    timeout = setTimeout(() => func(...arg), wait);
  };
};

const getFilterURL = (filter) => `https://jsonplaceholder.typicode.com/users${
  filter ? `?username=${encodeURIComponent(filter)}` : ''
}`;

const UserList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [value, setValue] = useState('');

  const setFilterDebounced = useMemo(() => debounce((val) => {
    setFilter(val);
  }), [setFilter]);

  useEffect(() => {
    setFilterDebounced(value);
  }, [value]);

  useEffect(async () => {
    const response = await fetch(getFilterURL(filter));
    const respData = await response.json();
    setData(respData);
  }, [filter]);


  const onFilterChange = useCallback((e) => {
    const { value: inputValue } = e.target;
    setValue(inputValue);
  }, [setValue]);

  return (
    <div>
      <div>
        Filter:
        <input
          type="text"
          onChange={onFilterChange}
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
};

export default UserList;
