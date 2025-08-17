import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Cột 1: Logo và mô tả */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-4">MyCompany</h2>
                    <p className="text-sm">
                        Chúng tôi mang đến những giải pháp công nghệ tối ưu giúp bạn phát triển bền vững và hiệu quả.
                    </p>
                </div>

                {/* Cột 2: Menu chính */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Liên kết</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-white transition">Trang chủ</a></li>
                        <li><a href="/about" className="hover:text-white transition">Giới thiệu</a></li>
                        <li><a href="/services" className="hover:text-white transition">Dịch vụ</a></li>
                        <li><a href="/contact" className="hover:text-white transition">Liên hệ</a></li>
                    </ul>
                </div>

                {/* Cột 3: Hỗ trợ */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Hỗ trợ</h3>
                    <ul className="space-y-2">
                        <li><a href="/faq" className="hover:text-white transition">Câu hỏi thường gặp</a></li>
                        <li><a href="/policy" className="hover:text-white transition">Chính sách bảo mật</a></li>
                        <li><a href="/terms" className="hover:text-white transition">Điều khoản sử dụng</a></li>
                    </ul>
                </div>

                {/* Cột 4: Mạng xã hội */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Kết nối với chúng tôi</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="https://facebook.com" className="hover:text-white transition"><FaFacebook /></a>
                        <a href="https://twitter.com" className="hover:text-white transition"><FaTwitter /></a>
                        <a href="https://instagram.com" className="hover:text-white transition"><FaInstagram /></a>
                        <a href="https://linkedin.com" className="hover:text-white transition"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            {/* Dòng bản quyền */}
            <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} MyCompany. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
