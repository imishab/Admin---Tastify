import React from 'react'
import { useFetchProductsQuery, useDeleteProductMutation } from "@/redux/api/adminApi";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { Pencil, Trash2 } from 'lucide-react';

export default function allProducts() {
    const { data: products, isLoading, isError, refetch } = useFetchProductsQuery('');
    const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();
    const router = useRouter();

    // Handle product deletion
    const handleDelete = async (id: string) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this product!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
            customClass: {
                confirmButton: 'btn btn-danger',
                cancelButton: 'btn btn-secondary',
            },
        });

        if (result.isConfirmed) {
            try {
                await deleteProduct(id).unwrap();
                toast.success('Product deleted successfully!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: true,
                });

                refetch();
            } catch (error) {
                toast.error('Failed to delete product. Please try again.', {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: true,
                });
            }
        }
    };

    return (
        <div className="content-page">
            <div className="content">
                <div className="container-xxl mt-4">


                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="card-title mb-0">All Products</h5>
                                    <Link href="/admin/products/add-product" className="btn btn-dark btn-sm">
                                        + Add New Product
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table
                                            id="scroll-vertical-datatable"
                                            className="table table-bordered dt-responsive nowrap w-100"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Item</th>
                                                    <th>MRP</th>
                                                    <th>Price</th>
                                                    <th>Category</th>
                                                    <th>Desc</th>
                                                    <th>Manage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {isLoading ? (
                                                    <tr>
                                                        <td colSpan={8} className="text-center">
                                                            <div className="loader-container d-flex ">
                                                                <div className="spinner-border spinner-border-sm text-dark me-2" role="status">
                                                                </div>
                                                                <p className="mt-3">Please wait...</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ) : products?.length > 0 ? (
                                                    products.map(
                                                        (
                                                            product: {
                                                                _id: string;
                                                                title: string;
                                                                desc: string;
                                                                price: number;
                                                                mrp: number;
                                                                category: string;
                                                                image: string;
                                                            },
                                                            index: number
                                                        ) => (
                                                            <tr key={product._id}>
                                                                <td>{index + 1}</td>
                                                                <td>
                                                                    <img
                                                                        src={`https://backend-tastify.onrender.com${product.image}`}
                                                                        alt={product.title}
                                                                        style={{
                                                                            width: '50px',
                                                                            height: '50px',
                                                                            objectFit: 'cover',
                                                                        }}
                                                                    />
                                                                    {product.title}
                                                                </td>
                                                                <td>{product.mrp}/-</td>
                                                                <td>{product.price}/-</td>
                                                                <td>{product.category}</td>
                                                                <td>{product.desc}</td>
                                                                <td>
                                                                    <button className="btn btn-dark btn-sm me-2">
                                                                        <Pencil size={14} />
                                                                    </button>
                                                                    <button
                                                                        className="btn btn-danger btn-sm"
                                                                        onClick={() => handleDelete(product._id)}
                                                                        disabled={isDeleting}
                                                                    >
                                                                        {isDeleting ? 'Deleting...' : <Trash2 size={14} />}
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    )
                                                ) : (
                                                    <tr>
                                                        <td colSpan={8} className="text-center">
                                                            No products found.
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
