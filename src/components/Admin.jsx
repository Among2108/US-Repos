// rafce
import React from "react";
import { Axios } from "axios";

export const Admin = ({ data = [] }) => {

  return (
    <>
      <div className="flex justify-center  ">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.position}</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
