import { Button } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import './Dashboard.scss';
import { increment, decrement, incrementByAmount, selectCount } from '~/redux/counterSlice';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './../../utils/hooks';
import { useDispatch } from 'react-redux';

function Dashboard() {
  const [defaultValue, setDefaultValue] = useState(2);
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreateLoan = () => {
    navigate('/dashboard/personal');
  };
  console.log('count', count);
  return (
    <div>
      <Button onClick={handleCreateLoan} className="btn-create">
        Create new loan
      </Button>
      <Button style={{ backgroundColor: 'red' }} onClick={() => dispatch(increment())}>
        Increase
      </Button>
      <Button style={{ backgroundColor: 'yellow' }} onClick={() => dispatch(decrement())}>
        Decrease
      </Button>
      <p>{count}</p>

      <Outlet />
    </div>
  );
}

export default Dashboard;
