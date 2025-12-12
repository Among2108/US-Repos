// rafce
import React from "react";
import  axios  from "axios";

export const Admin = ({ data = [],onUserDeleted } ) => {
      const handleDelete = async (id) => {
        try {
            const isConfirm = confirm("Are you sure? 😢");
            if (!isConfirm) return;

            await axios.delete(`https://67eca027aa794fb3222e43e2.mockapi.io/members/${id}`);

            if (onUserDeleted) {
                onUserDeleted();
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }
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
                <td>
                  {" "}
                  <a
                    className="hover:underline text-red-600 font-normal cursor-pointer"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
