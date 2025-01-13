import { useAddCategoryMutation } from "../../../redux/api/adminApi";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AddCategory() {
  // Capitalized the component name
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [addCategory, { isLoading, isSuccess }] = useAddCategoryMutation();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Category added successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
      });
    }
  }, [isSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCategory({ title, desc }).unwrap();
      setTitle("");
      setDesc("");
      router.push("/admin/categories?success=true");
    } catch (err) {
      // Log or handle the error appropriately
      console.error(err);
      toast.error("Failed to add category.");
    }
  };

  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-xxl mt-4">
            <form role="form" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-lg-7">
                  <div className="card card-plain p-2">
                    <div className="card-header">
                      <div className="d-flex align-items-center">
                        <Link href="/admin/category/all-categories">
                          <ArrowLeft
                            color="#000"
                            size={18}
                            className="me-3 mb-0 mt-0"
                          />
                        </Link>
                        <h5 className="font-weight-bolder mt-2">
                          Add New Category
                        </h5>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="form-group mb-1">
                        <label className="mb-1">Category Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group mb-1">
                        <label className="mb-1 mt-2">
                          Description (optional)
                        </label>
                        <textarea
                          className="form-control"
                          rows={3}
                          value={desc}
                          onChange={(e) => setDesc(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-dark mt-4 w-50 me-1 mb-0"
                        disabled={isLoading}
                      >
                        {isLoading ? "Adding..." : "Add Category"}
                      </button>
                      <Link
                        href="/admin/category/all-categories"
                        className="btn btn-secondary mt-4 mb-0"
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
