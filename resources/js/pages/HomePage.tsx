import React from "react"
import {
  FcCellPhone,
  FcDataSheet,
  FcElectronics,
  FcGlobe,
  FcMoneyTransfer,
  FcPhone,
  FcSimCardChip,
  FcVideoCall,
} from "react-icons/fc"
import {
  MdAccountBalance,
  MdAirplanemodeActive,
  MdDirectionsRun,
  MdHealthAndSafety,
  MdHome,
  MdHotel,
  MdLocalActivity,
  MdSportsEsports,
  MdTv,
  MdWallet,
  MdWater,
} from "react-icons/md"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface MenuItemProps {
  icon: React.ReactNode
  label: string
  onClick?: () => void
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-base-200 transition-colors group"
    >
      <div className="text-3xl md:text-4xl transition-transform group-hover:scale-110">
        {icon}
      </div>
      <span className="text-xs text-center text-base-content/80 font-medium">
        {label}
      </span>
    </button>
  )
}

export default function HomePage() {
  const menuItems: MenuItemProps[] = [
    {
      icon: <MdAirplanemodeActive className="text-blue-500" />,
      label: "Tiket Pesawat",
    },
    { icon: <MdHotel className="text-pink-500" />, label: "Hotel" },
    { icon: <FcSimCardChip />, label: "eSim" },
    { icon: <MdSportsEsports className="text-purple-500" />, label: "Games" },
    { icon: <FcCellPhone />, label: "Pulsa" },
    { icon: <FcDataSheet />, label: "Data" },
    { icon: <MdWallet className="text-green-500" />, label: "E-Wallet" },
    { icon: <FcElectronics />, label: "PLN" },
    { icon: <FcGlobe />, label: "Internet" },
    { icon: <FcPhone />, label: "Telpon" },
    { icon: <MdTv className="text-purple-600" />, label: "TV" },
    { icon: <MdLocalActivity className="text-orange-500" />, label: "Voucher" },
    { icon: <FcVideoCall />, label: "Streaming" },
    { icon: <MdHealthAndSafety className="text-red-500" />, label: "BPJS" },
    {
      icon: <FcMoneyTransfer />,
      label: "Multifinance",
    },
    { icon: <MdHome className="text-amber-600" />, label: "PBB" },
    { icon: <MdWater className="text-blue-400" />, label: "PDAM" },
    {
      icon: <FcCellPhone />,
      label: "HP Pascabayar",
    },
  ]

  const sliderImages = [
    {
      url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=400&fit=crop",
      title: "Transaksi Mudah dan Cepat",
      description: "Bayar semua tagihan dalam satu aplikasi",
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop",
      title: "Promo Menarik Setiap Hari",
      description: "Dapatkan cashback hingga 50%",
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop",
      title: "Aman dan Terpercaya",
      description: "Transaksi dijamin aman 100%",
    },
  ]

  const realtimeTransactions = [
    {
      id: "TRX001",
      type: "Pulsa",
      amount: "Rp 50.000",
      status: "success",
      time: "2 menit yang lalu",
    },
    {
      id: "TRX002",
      type: "PLN Token",
      amount: "Rp 100.000",
      status: "success",
      time: "5 menit yang lalu",
    },
    {
      id: "TRX003",
      type: "E-Wallet",
      amount: "Rp 200.000",
      status: "processing",
      time: "8 menit yang lalu",
    },
  ]

  const whyUsFeatures = [
    {
      icon: <MdDirectionsRun className="text-4xl text-primary" />,
      title: "Proses Cepat",
      description: "Transaksi diproses dalam hitungan detik",
    },
    {
      icon: <MdHealthAndSafety className="text-4xl text-success" />,
      title: "Aman & Terpercaya",
      description: "Sistem keamanan berlapis untuk melindungi transaksi Anda",
    },
    {
      icon: <MdLocalActivity className="text-4xl text-warning" />,
      title: "Banyak Promo",
      description: "Dapatkan cashback dan diskon setiap hari",
    },
    {
      icon: <FcMoneyTransfer className="text-4xl" />,
      title: "Harga Terbaik",
      description: "Harga kompetitif dengan layanan terbaik",
    },
  ]

  return (
    <div className="min-h-screen bg-base-200">
      {/* Header/Navbar */}
      <div className="navbar bg-primary text-primary-content sticky top-0 z-50 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-bold">PaymentApp</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-secondary indicator-item"></span>
            </div>
          </button>
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Image Slider */}
        <section className="mb-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {sliderImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-xl overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl md:text-3xl font-bold mb-2">
                        {image.title}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </section>

        {/* Grid Icon Menu */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Layanan Kami</CardTitle>
              <CardDescription>
                Pilih layanan yang Anda butuhkan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4">
                {menuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    onClick={item.onClick}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Realtime Status Transaksi */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                </span>
                Status Transaksi Realtime
              </CardTitle>
              <CardDescription>
                Lihat transaksi yang baru saja diproses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {realtimeTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-base-200 hover:bg-base-300 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-base-content">
                          {transaction.type}
                        </span>
                        <Badge
                          variant={
                            transaction.status === "success"
                              ? "default"
                              : "secondary"
                          }
                          className={cn(
                            transaction.status === "success" &&
                              "bg-success text-success-content",
                            transaction.status === "processing" &&
                              "bg-warning text-warning-content"
                          )}
                        >
                          {transaction.status === "success"
                            ? "Berhasil"
                            : "Diproses"}
                        </Badge>
                      </div>
                      <p className="text-sm text-base-content/60">
                        {transaction.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-primary">
                        {transaction.amount}
                      </p>
                      <p className="text-xs text-base-content/60">
                        {transaction.id}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Us */}
        <section className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-base-content mb-2">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-base-content/70">
              Layanan terbaik untuk kebutuhan transaksi digital Anda
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyUsFeatures.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow cursor-pointer"
              >
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-lg mb-2 text-base-content">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-base-content/70">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Tentang Kami</a>
          <a className="link link-hover">Kontak</a>
          <a className="link link-hover">Syarat & Ketentuan</a>
          <a className="link link-hover">Kebijakan Privasi</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p className="font-semibold">
            PaymentApp - Platform Pembayaran Digital Terpercaya
          </p>
          <p className="text-sm text-base-content/70">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </aside>
      </footer>
    </div>
  )
}
