import React from "react";

const User = ({ data = [] }) => {
  return (
    <>
      <div className="flex justify-center ">
        {" "}
        {/*เช็คของui*/}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
      {/*เช็คของui*/}
    </>
  );
};

export default User;
