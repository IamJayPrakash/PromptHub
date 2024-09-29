// components/MyProfile.jsx

"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";
import { toast } from "react-toastify";
import handleApiError from "@utils/helpers/handleApiError";
import { HashLoader } from "react-spinners";

const MyProfile = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [myPosts, setMyPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // If session is loading, do nothing
    if (status === "loading") {
      return;
    }

    // If unauthenticated, redirect to home
    if (status === "unauthenticated") {
      toast.error("You must be logged in to view your profile.");
      router.push("/");
      return;
    }

    // Fetch posts
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/users/${session.user.id}/posts`);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch posts");
        }

        const data = await response.json();
        setMyPosts(data);
      } catch (error) {
        setError(error.message);
        handleApiError({ error }); // Show toast notification
      } finally {
        setIsLoading(false);
      }
    };

    if (session?.user.id) fetchPosts();
  }, [session, status, router]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/prompt/${post._id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to delete prompt");
        }

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);
        setMyPosts(filteredPosts);
        toast.success("Prompt deleted successfully!");
      } catch (error) {
        handleApiError({ error }); // Show toast notification
      }
    }
  };

  // Show loading spinner while fetching data
  if (status === "loading" || isLoading) {
    return (
      <div className="justify-center pt-3 mt-4 d-flex align-center w-100">
        <HashLoader color="orange" />
      </div>
    );
  }

  // Show error message if there's an error
  if (error) return <p className="mt-3 text-red-600">{error}</p>;

  // Render the Profile component if data is loaded and no errors
  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination."
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
