import React, { useState } from "react";
import { useGenerateImageMutation } from "../../../redux/api/adminApi";
import Link from "next/link";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const [generateImage, { isLoading, isError, error }] =
    useGenerateImageMutation();

  const handleGenerate = async () => {
    if (!name) {
      alert("Please enter a product name");
      return;
    }

    try {
      setImage(null); // Clear previous image
      setIsImageLoading(true); // Start loader for the new image
      const response = await generateImage(name).unwrap();
      setImage(response.imageUrl);
    } catch (err) {
      console.error(err);
      alert("Error generating image");
      setIsImageLoading(false); // Stop loader if error occurs
    }
  };

  const handleImageLoad = () => {
    setIsImageLoading(false); // Stop loader when the image is fully loaded
  };

  return (
    <div className="content-page">
      <div className="content">
        <div className="container-xxl mt-4">
          <h4 className="mb-4">AI Product Generator</h4>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <div className="col-lg-6">
                <div className="card-body">
                  <div className="form-group mb-1">
                    <label className="mb-1">Item Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter the product name to generate image"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  {/* <button
                                        type="submit" className="btn btn-md btn-dark  mt-2 w-50 me-1 mb-0" onClick={handleGenerate} disabled={isLoading}>
                                        {isLoading ? 'Generating...' : 'Generate Image'}
                                    </button> */}

                  <button
                    type="button"
                    className="btn btn-md btn-dark  mt-2 w-50 me-1 mb-0"
                    onClick={handleGenerate}
                    disabled={isLoading || isImageLoading}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                    }}
                  >
                    {(isLoading || isImageLoading) && (
                      <span className="loader"></span>
                    )}
                    {isLoading || isImageLoading
                      ? "Generating..."
                      : "Generate Image"}
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="mt-3">
            {image && (
              <div>
                <h5>Generated Image:</h5>
                <img
                  src={image}
                  alt={name}
                  onLoad={handleImageLoad}
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
