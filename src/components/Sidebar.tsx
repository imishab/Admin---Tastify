import { clearAdminDetails } from '@/redux/slices/adminSlice';
import { AppWindow, Bell, CircleUserRound, LayoutDashboard, Package, PackageOpen, PanelsTopLeft, ReceiptText, Settings, Shield, Truck, Users, UsersRound } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {


    return (
        <>
            {/* Left Sidebar Start */}
            <div className="app-sidebar-menu">
                <div className="h-100 sidebarline" data-simplebar="">
                    {/*- Sidemenu */}
                    <div id="sidebar-menu">
                        <div className="logo-box">
                            <Link href="/" className="logo logo-light">
                                <h4><b>Tastify.</b></h4>
                            </Link>
                            <a href="/" className="logo logo-dark" style={{ marginTop: 50 }}>
                                <h4><b>Tastify.</b></h4>
                            </a>
                        </div>
                        <ul id="side-menu">
                            <li className="menu-title">Menu</li>
                            <li>
                                <Link href="/admin/dashboard" className="tp-link active">
                                    <AppWindow />
                                    <span> Dashboard </span>
                                </Link>
                            </li>

                            <li className="menu-title">Manage</li>

                            <li>
                                <a href="#product" data-bs-toggle="collapse">
                                    <Package />
                                    <span> Products </span>
                                    <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="product">
                                    <ul className="nav-second-level">
                                        <li>
                                            <Link href="/admin/products/all-products" className="tp-link">
                                                All Products
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/products/add-product" className="tp-link">
                                                Add New Product
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/products/ai-product" className="tp-link">
                                                AI Image
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#!" className="tp-link">
                                                Deleted Products
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#category" data-bs-toggle="collapse">
                                    <LayoutDashboard />
                                    <span> Category </span>
                                    <span className="menu-arrow" />
                                </a>
                                <div className="collapse" id="category">
                                    <ul className="nav-second-level">
                                        <li>
                                            <Link href="/admin/category/all-categories" className="tp-link">
                                                All Categories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/category/add-category" className="tp-link">
                                                Add New Category
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#!" className="tp-link">
                                                Deleted Category
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link href="/admin/orders/all-orders" className="tp-link">
                                    <Truck />
                                    <span> Orders </span>
                                </Link>
                            </li>
                            <li className="menu-title">USERS</li>
                            <li>
                                <Link href="/admin/users/all-users" className="tp-link">
                                    <UsersRound />
                                    <span> Users </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/dashboard" className="tp-link">
                                    <Shield />
                                    <span> Admin </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/dashboard" className="tp-link">
                                    <CircleUserRound />
                                    <span> Delivery Boy </span>
                                </Link>
                            </li>
                            <li className="menu-title">analysis</li>
                            <li>
                                <Link href="/admin/dashboard" className="tp-link">
                                    <PackageOpen />
                                    <span> Product Analysis  </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/dashboard" className="tp-link">
                                    <ReceiptText />
                                    <span> Purchase Analysis  </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* End Sidebar */}
                    <div className="clearfix" />
                </div>
            </div>
            {/* Left Sidebar End */}
        </>

    )
}
