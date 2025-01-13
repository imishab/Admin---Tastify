import { useAddProductMutation, useFetchCategoriesQuery } from '@/redux/api/adminApi';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
export default function addProduct() {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [mrp, setMrp] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [addProduct, { isLoading, isSuccess }] = useAddProductMutation();
    const router = useRouter();
    const { data: categories, isError } = useFetchCategoriesQuery('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!image) {
            alert("Please upload an image.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('desc', desc);
            formData.append('price', price);
            formData.append('mrp', mrp);
            formData.append('category', category);
            formData.append('image', image);

            await addProduct(formData).unwrap();

            // Reset form fields
            setTitle('');
            setDesc('');
            setPrice('');
            setMrp('');
            setCategory('');
            setImage(null);

            // Redirect with success flag
            router.push('/admin/products/all-products');
        } catch (error) {
            alert("Failed to add product.");
        }
    };


    useEffect(() => {
        if (isSuccess) {
            toast.success('The product has been successfully added!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: true,
            });
        }
    }, [isSuccess])


    return (
        <>
            <div className="content-page">
                <div className="content">
                    {/* Start Content*/}
                    <div className="container-xxl mt-4">

                        <div className="container">
                            <form role="form" onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-lg-7">
                                        <div className="card card-plain p-2">
                                            <div className="card-header">
                                                <div className="d-flex align-items-center">
                                                    <Link href="/admin/products/all-products"> <ArrowLeft size={18} color='#000' className='me-3 mb-0 mt-0' /></Link>
                                                    <h5 className="font-weight-bolder mt-2">Add New Product</h5>
                                                </div>
                                            </div>
                                            <div className="card-body">

                                                <div className="form-group mb-1">
                                                    <label className='mb-1'>Item Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleFormControlInput1"
                                                        placeholder=""
                                                        value={title}
                                                        onChange={(e) => setTitle(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="row g-2">
                                                    <div className="col-lg-6">
                                                        <div className="form-group mb-1">
                                                            <label className='mb-1 mt-2'>MRP</label>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                id="exampleFormControlInput1"
                                                                placeholder=""
                                                                value={mrp}
                                                                onChange={(e) => setMrp(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group mb-1">
                                                            <label className='mb-1 mt-2'>Discount Price</label>
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                id="exampleFormControlInput1"
                                                                placeholder=""
                                                                value={price}
                                                                onChange={(e) => setPrice(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group mb-1">
                                                    <label className='mb-1 mt-2'>Description</label>
                                                    <textarea
                                                        className="form-control"
                                                        id="exampleFormControlTextarea1"
                                                        rows={3}
                                                        defaultValue={""}
                                                        value={desc}
                                                        onChange={(e) => setDesc(e.target.value)}
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group mb-1">
                                                    <label className="mb-1 mt-2">Category</label>
                                                    <select
                                                        className="form-control"
                                                        id="exampleFormControlSelect1"
                                                        value={category}
                                                        onChange={(e) => setCategory(e.target.value)}
                                                        required
                                                    >
                                                        <option value="" disabled>
                                                            Select Category
                                                        </option>
                                                        {categories?.map(
                                                            (category: {
                                                                _id: string;
                                                                title: string;
                                                                desc: string;

                                                            }, index: number) => (
                                                                <>
                                                                    <option value={category.title}>{category.title}</option>

                                                                </>
                                                            ))}
                                                    </select>
                                                </div>




                                                <button
                                                    type="submit" className="btn btn-md btn-dark  mt-4 w-50 me-1 mb-0" disabled={isLoading}>
                                                    {isLoading ? 'Adding...' : 'Add Product'}
                                                </button>
                                                <Link href="/admin/products/all-products"

                                                    className="btn btn-md btn-secondary  mt-4 mb-0"
                                                >
                                                    Cancel
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="card card-plain p-2 ">

                                            <div className="card-body">
                                                <div className="form-group mb-1">
                                                    <label className="mb-1 mt-2">Upload Image</label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        onChange={handleFileChange}
                                                        required
                                                    />
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </form>
                            {/* <ToastContainer /> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
