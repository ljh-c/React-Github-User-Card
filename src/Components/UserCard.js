import React from 'react';

function UserCard({ handle }) {
  return (
    <div className="card">
      {handle}
    </div>
  );
}

export default UserCard;