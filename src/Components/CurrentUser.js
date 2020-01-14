import React from 'react';

function CurrentUser({ handle }) {
  return (
    <div className="card">
      {handle}
    </div>
  );
}

export default CurrentUser;