export const invitations = {
  "risma-adam": {
    logoImage: "/images/logo.png",
    heroBackground: "/images/image5.jpeg",
    bride: {
      name: "Risma Hayati",
      uname: "Risma",
      parents: "Putri dari Bapak Hairul Rizal & Ibu Asnaini",
      instagram: "syugarisss"
    },
    groom: {
      name: "M. Adam Rizki Irawan",
      uname: "Adam",
      parents: "Putra dari Bapak Evo Agus Irawan & Ibu Nurhayati",
      instagram: "pakdomm"
    },
    event: {
      dayLabel: "Sabtu, 13 Desember 2025",
      time: "08.00 WIB – Selesai",

      location: `Jl. Medan - Tebing Tinggi, Liberia,
Kec. Teluk Mengkudu`,

      mapEmbed:
        "https://www.google.com/maps?q=3.532500,99.087556&hl=es;z=14&output=embed",

      mapLink:
        "https://maps.google.com/?q=3.532500,99.087556"
    },
    galery: {
        ft1: "/images/image1.jpeg",
        ft2: "/images/image2.png",
        ft3: "/images/image3.jpeg",
        ft4: "/images/image4.jpeg",
        ft5: "/images/image5.jpeg",
        ft6: "/images/image6.jpeg",  
    },
    gift: {
        transfer: [
            {
                bank: "MANDIRI",
                number: "1060017159230",
                name: "M. Adam Rizki Irawan"
            },
            {
                bank: "SEA BANK",
                number: "901745647962",
                name: "Risma Hayati"
            }
        ],

    qrImage: "/images/qr-code.jpeg",

    physical: [
        { label: "Alamat", value: "Simpang Matapao (Bakso Wongso)" },
        { label: "Kota", value: "Serdang Bedagai" },
        { label: "Penerima", value: "Risma Hayati" }
    ]
    },
    brideImage: "/images/risma.png",
    groomImage: "/images/adam.jpeg",
    dateISO: "2026-01-10T09:00:00",
    dateLabel: "13 • 12 • 2025"
  },

  "shinta-ali": {
    heroBackground: "/images/shintaali/IMG-20260308-WA0022.jpg",
    logoImage: "/images/shintaali/logo.png",
    bride: {
      name: "Shinta Tresaeni",
      uname: "Shinta",
      parents: "Putri Pertama dari Bapak Sutrisno & Ibu Sairah",
      instagram: "shinta"
    },
    groom: {
      name: "Ali Pudin",
      uname: "Ali",
      parents: "Putra Kedua dari Bapak Kusnadi & Ibu Rokhimah",
      instagram: "alipudin"
    },
    event: {
      dayLabel: "Kamis, 26 Maret 2026",
      time: "08.00 WIB – Selesai",

      location: `Jl. Sepat Gang Muji Jaya RT 06/05 No.18 `,

      mapEmbed:
        "https://www.google.com/maps?q=-6.860224,109.128173&hl=es;z=14&output=embed",

      mapLink:
        "https://maps.google.com/?q=-6.860224,109.128173"
    },
    
    galery: {
        ft1: "/images/shintaali/IMG-20260308-WA0021.jpg",
        ft2: "/images/shintaali/IMG-20260308-WA0022.jpg",
        ft3: "/images/shintaali/IMG-20260308-WA0023.jpg",
        ft4: "/images/shintaali/IMG-20260308-WA0024.jpg",
        ft5: "/images/shintaali/IMG-20260308-WA0025.jpg",
        ft6: "/images/shintaali/IMG-20260308-WA0022.jpg",  
    },

    gift: {
        transfer: [
            {
                bank: "BCA",
                number: "0471292108",
                name: "Shinta Tresaeni"
            },
            {
                bank: "BRI",
                number: "302601041129539",
                name: "Shinta Tresaeni"
            }
        ],

    qrImage: null,

    physical: [
        { label: "Alamat", value: "Jl. Sepat gang muji, RT 06/05, No.18" },
        { label: "Kota", value: "Tegal" },
        { label: "Penerima", value: "Shinta Tresaeni / Ibu Sairah" }
    ]
    },
    brideImage: "/images/shintaali/bride.png",
    groomImage: "/images/shintaali/groom.png",
    dateISO: "2026-03-26T08:00:00",
    dateLabel: "26 • 03 • 2026"
  }
} as const;