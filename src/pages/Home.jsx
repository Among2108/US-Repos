import React, { useEffect, useState } from "react";
import User from "../components/User";
import { Admin } from "../components/Admin";
import ViewButton from "../components/ViewButton";
import axios from "axios";
import InputFrom from "../components/InputFrom";

const Home = () => {
  const dataPerson = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

  const [view, setView] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(dataPerson);
      setData(response.data);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="w-full min-h-screen">
      <h1 className="flex justify-center text-4xl font-bold pt-10">
        Generation Thailand
      </h1>

      {view === "" && (
        <h1 className="flex justify-center text-4xl font-bold">
          React - Assessment
        </h1>
      )}
      {view === "User" && (
        <h1 className="flex justify-center text-4xl font-bold">
          Home - User View
        </h1>
      )}
      {view === "Admin" && (
        <h1 className="flex justify-center text-4xl font-bold">
          Home - Admin View
        </h1>
      )}

      <div className="flex justify-center gap-32 mt-10">
        <ViewButton onClick={() => setView("User")}>User Home View</ViewButton>
        <ViewButton onClick={() => setView("Admin")}>Admin Home View</ViewButton>
      </div>

      {loading && <p className="text-center mt-6">Loading...</p>}


      {view === "User" && <User data={data} />}
      {view === "Admin" && <InputFrom />}
      {view === "Admin" && <Admin data={data} onUserDeleted={fetchData} />}
    </div>
  );
};

export default Home;
