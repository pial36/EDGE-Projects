import { useEffect, useState } from "react";

const DataManagement = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    try {
      setLoading(true);
      const response = await fetch("YOUR_API_ENDPOINT_HERE");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error loading data:", error);
      alert("Error loading data. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      const response = await fetch("YOUR_API_ENDPOINT_HERE", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ f_name: fname, l_name: lname }),
      });

      if (!response.ok) {
        throw new Error('Failed to add data');
      }

      setFname('');
      setLname('');
      await loadData();
      alert('Data added successfully!');
    } catch (error) {
      console.error("Error adding data:", error);
      alert("Error adding data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label className="block mb-2">First Name:</label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Last Name:</label>
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Adding...' : 'Add User'}
        </button>
      </form>
      
      <div>
        <h2 className="text-xl font-bold mb-4">User List</h2>
        {loading ? (
          <p>Loading...</p>
        ) : users.length === 0 ? (
          <p>No users found</p>
        ) : (
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">First Name</th>
                  <th className="px-6 py-3 text-left">Last Name</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr 
                    key={index}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">{user.f_name}</td>
                    <td className="px-6 py-4">{user.l_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataManagement;