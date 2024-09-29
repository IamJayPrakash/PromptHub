"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";
import { HashLoader } from "react-spinners";
import handleApiError from "@utils/helpers/handleApiError";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/users/${params?.id}/posts`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch posts");
        }
        const data = await response.json();
        setUserPosts(data);
      } catch (error) {
        setError(error.message);
        handleApiError({ error }); 
      } finally {
        setIsLoading(false);
      }
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="justify-center pt-3 mt-4 d-flex align-center w-100">
        <HashLoader color="orange" />
      </div>
    );
  }

  if (error) return <p className="mt-3 text-red-600">{error}</p>;

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination.`}
      data={userPosts}
    />
  );
};

export default UserProfile;
