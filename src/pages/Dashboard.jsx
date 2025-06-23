import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import avatarImg from "../assets/avatar.png";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Adjust path if needed


const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(() =>
    localStorage.getItem("askhub_user_image") || avatarImg
  );
  const [postText, setPostText] = useState("");
  const [roomName, setRoomName] = useState("");
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("askhub_posts");
    return saved ? JSON.parse(saved) : [];
  });
  const [rooms, setRooms] = useState(() => {
    const saved = localStorage.getItem("askhub_rooms");
    return saved ? JSON.parse(saved) : [];
  });
  const [doubts, setDoubts] = useState(() => {
    const saved = localStorage.getItem("askhub_doubts");
    return saved ? parseInt(saved) : 42;
  });
  const [solvedDoubts, setSolvedDoubts] = useState(() => {
    const saved = localStorage.getItem("askhub_solved_doubts");
    return saved ? parseInt(saved) : 28;
  });

  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("askhub_loggedin");
    const savedEmail = localStorage.getItem("askhub_user_email");
    const savedImage = localStorage.getItem("askhub_user_image");

    if (loggedIn !== "true") {
      navigate("/");
    } else {
      setEmail(savedEmail || "");
      if (savedImage) setImage(savedImage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        localStorage.setItem("askhub_user_image", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("askhub_loggedin");
    localStorage.removeItem("askhub_user_email");
    localStorage.removeItem("askhub_user_image");
    navigate("/");
  };

  const handlePostCreate = () => {
    if (!postText.trim()) return;
    const newPost = { text: postText, author: email, createdAt: new Date() };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem("askhub_posts", JSON.stringify(updatedPosts));
    setPostText("");
  };

  const handleRoomCreate = () => {
    if (rooms.length >= 4) {
      alert("Only 4 rooms allowed.");
      return;
    }
    if (!roomName.trim()) return;
    const updatedRooms = [...rooms, roomName];
    setRooms(updatedRooms);
    localStorage.setItem("askhub_rooms", JSON.stringify(updatedRooms));
    setRoomName("");
  };

  const handleSolveDoubt = () => {
    setSolvedDoubts((prev) => {
      const updated = prev + 1;
      localStorage.setItem("askhub_solved_doubts", updated);
      return updated;
    });
  };

  const handleAddDoubt = () => {
    setDoubts((prev) => {
      const updated = prev + 1;
      localStorage.setItem("askhub_doubts", updated);
      return updated;
    });
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex min-h-screen bg-gray-100 dark:bg-zinc-900">
        {/* Sidebar */}
        <div className="w-64 bg-zinc-300 dark:bg-zinc-800 p-4 shadow-lg">
          <h2 className="text-2xl font-bold text-center dark:text-white">
            <img src={Logo} alt="logo" className="w-32 mx-auto" />
          </h2>
          <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-200">
            <li>Dashboard</li>
            <li>Create Post</li>
            <li className="cursor-pointer" onClick={handleSolveDoubt}>Solve Doubt</li>
            <li>Create Room</li>
            <li className="cursor-pointer" onClick={handleAddDoubt}>Total Doubts</li>
            <li>Solved Doubts</li>
            <li
              className="cursor-pointer text-red-500 dark:text-red-400"
              onClick={handleLogout}
            >
              Logout
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 text-black dark:text-zinc-300">
          {/* Topbar */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <img
                src={image}
                alt="avatar"
                className="w-12 h-12 rounded-full object-cover border-2"
              />
              <div>
                <p className="text-lg font-semibold">{email}</p>
                <label className="text-xs underline cursor-pointer">
                  Change Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-zinc-700"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-zinc-300 dark:bg-zinc-800 p-4 rounded shadow">
              <p className="text-sm">Total Doubts</p>
              <h2 className="text-2xl font-bold">{doubts}</h2>
            </div>
            <div className="bg-zinc-300 dark:bg-zinc-800 p-4 rounded shadow">
              <p className="text-sm">Solved Doubts</p>
              <h2 className="text-2xl font-bold">{solvedDoubts}</h2>
            </div>
            <div className="bg-zinc-300 dark:bg-zinc-800 p-4 rounded shadow">
              <p className="text-sm">Total Rooms</p>
              <h2 className="text-2xl font-bold">{rooms.length}/4</h2>
            </div>
            <div className="bg-zinc-300 dark:bg-zinc-800 p-4 rounded shadow">
              <p className="text-sm">Your Posts</p>
              <h2 className="text-2xl font-bold">{posts.length}</h2>
            </div>
          </div>

          {/* Create Post */}
          <div className="bg-zinc-300 dark:bg-zinc-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Create a Post</h3>
            <textarea
              rows="4"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="w-full p-2 bg-gray-100 dark:bg-zinc-700 rounded"
              placeholder="Write something..."
            ></textarea>
            <button
              onClick={handlePostCreate}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Post
            </button>
          </div>

          {/* View Posts */}
          {posts.length > 0 && (
            <div className="mt-6 bg-zinc-300 dark:bg-zinc-800 p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">All Posts</h3>
              <ul className="space-y-4">
                {posts.map((post, index) => (
                  <li key={index} className="bg-gray-100 dark:bg-zinc-700 p-4 rounded">
                    <p>{post.text}</p>
                    <small className="block mt-1 text-sm text-gray-500 dark:text-gray-400">
                      By {post.author} • {new Date(post.createdAt).toLocaleString()}
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Create Room */}
          <div className="mt-6 bg-zinc-300 dark:bg-zinc-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Create a Room</h3>
            <p className="text-sm mb-1">Max 4 members allowed</p>
            <input
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Room name"
              className="w-full p-2 bg-gray-100 dark:bg-zinc-700 rounded"
            />
            <button
              onClick={handleRoomCreate}
              className="mt-2 px-4 py-2 bg-green-600 text-white rounded"
            >
              Create
            </button>
            {rooms.length > 0 && (
              <ul className="mt-4 space-y-2">
                {rooms.map((room, idx) => (
                  <li key={idx} className="bg-gray-100 dark:bg-zinc-700 p-2 rounded">
                    {room}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
