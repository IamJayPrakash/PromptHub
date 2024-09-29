"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Use next/router instead of next/navigation
import Form from "@components/Form";
import { toast } from "react-toastify";
import handleApiError from "@utils/helpers/handleApiError";

const UpdatePrompt = () => {
  const router = useRouter();
  const { id: promptId } = router.query; // Access the query params using next/router

  const [post, setPost] = useState({ prompt: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPromptDetails = async () => {
      if (promptId) {
        try {
          const response = await fetch(`/api/prompt/${promptId}`);
          if (response.ok) {
            const data = await response.json();
            setPost({
              prompt: data.prompt,
              tag: data.tag,
            });
          }
        } catch (error) {
          console.error(error);
          handleApiError({ error });
        }
      }
    };

    getPromptDetails();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!promptId) return alert("Missing PromptId!");

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
        toast.success("Prompt updated successfully!");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update prompt");
      }
    } catch (error) {
      console.error(error);
      handleApiError({ error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdatePrompt;
