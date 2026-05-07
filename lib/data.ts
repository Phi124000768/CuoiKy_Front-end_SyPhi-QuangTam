export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  badge?: "hot" | "new" | "sale"
  soldCount?: number
  colors?: string[]
}

export const products: Product[] = [
  // Hàng bán chạy
  {
    id: "1",
    name: "Áo Polo Nam TPSTORE ICONDENIM League",
    price: 249000,
    originalPrice: 399000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-polo-nam-icondenim-league-1_83eab754c2144a6a86b118468f5b435a_large.jpg",
    category: "ao-polo",
    badge: "hot",
    soldCount: 245
  },
  {
    id: "2",
    name: "Quần Short Nam TPSTORE ICONDENIM Minimal Luxe",
    price: 319000,
    originalPrice: 450000,
    image: "https://cdn.hstatic.net/products/1000253775/quan-short-nam-icondenim-minimal-luxe-3_c916aa6dd88148259153d162724fe5b5_large.jpg",
    category: "quan-short",
    badge: "hot",
    soldCount: 189
  },
  {
    id: "3",
    name: "Áo Polo Nam TPSTORE ICONDENIM Gentle",
    price: 289000,
    originalPrice: 420000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-polo-nam-icondenim-gentle-13_56cc5af3c19a436aa3d7a7c6fecd31bc_large.jpg",
    category: "ao-polo",
    badge: "sale",
    soldCount: 312
  },
  {
    id: "4",
    name: "Quần Tây Nam TPSTORE ICONDENIM Classic - Slim",
    price: 449000,
    image: "https://product.hstatic.net/1000253775/product/160_quan_tay_4m-5_aae66962dedc4ed7a0ef5c625d2e00a0_large.jpg",
    category: "quan-tay",
    soldCount: 156
  },
  {
    id: "5",
    name: "Áo Sơ Mi Nam Tay Ngắn TPSTORE ICONDENIM AM Daylight",
    price: 289000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-so-mi-nam-tay-ngan-icondenim-am-daylight-12_3f2771b63f3d4815850452a2a9c5e566_large.jpg",
    category: "ao-so-mi",
    badge: "new",
    soldCount: 98
  },
  // Hàng mới
  {
    id: "6",
    name: "Áo Thun Nam TPSTORE ICONDENIM Astra",
    price: 229000,
    image: "https://cdn.hstatic.net/products/1000253775/160_ao_thun_685-13_7c701af05ed24435bda1eb593fea259d_large.jpg",
    category: "ao-thun",
    badge: "new"
  },
  {
    id: "7",
    name: "Quần Jogger Nam TPSTORE Aero Work",
    price: 419000,
    originalPrice: 550000,
    image: "https://joggerstore.vn/wp-content/uploads/2021/06/hieuunganh.com_614d5f753f4cc-300x350.png",
    category: "quan-jogger",
    badge: "sale"
  },
  {
    id: "8",
    name: "Áo Thun Nam Tay Dài TPSTORE Disney Race League",
    price: 199000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-thun-nam-tay-dai-disney-race-league75_65ed04487bbb4fbab3e77344edd62e5e_large.png",
    category: "ao-thun",
    badge: "new"
  },
  {
    id: "9",
    name: "Áo Khoác Dù Nam DISNEY Racing Division",
    price: 529000,
    originalPrice: 699000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-khoac-du-nam-disney-racing-division68_48e75ad2a6374d77806a42a45cd6295e_1024x1024.png",
    category: "ao-khoac",
    badge: "hot"
  },
  {
    id: "10",
    name: "Áo Sơ Mi Nam Cuban TPSTORE ICONDENIM Simplify",
    price: 679000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-so-mi-nam-cuban-icondenim-simplify-1_05e8e72cf18c4430a8af0e7c5fc1b3df_large.png",
    category: "ao-so-mi",
    badge: "new"
  },
  // Áo thun
  {
    id: "11",
    name: "Áo Thun Nam TPSTORE ICONDENIM Day Break",
    price: 189000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-thun-nam-icondenim-day-break-9_95a0fd507dc04de385b62fbbe22eca91_1024x1024.jpg",
    category: "ao-thun",
    colors: ["black", "white", "gray"]
  },
  {
    id: "12",
    name: "Áo Thun Nam TPSTORE Disney Track Number",
    price: 219000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-thun-nam-disney-track-number28_5934404da2124b9ab86322ab37fcd232_1024x1024.png",
    category: "ao-thun",
    colors: ["navy", "black"]
  },
  {
    id: "13",
    name: "Áo Thun Nam ICONDENIM Gravitas",
    price: 249000,
    originalPrice: 350000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-thun-nam-icondenim-gravitas-3_c7efca73147a4f00b79222c7252f5867_1024x1024.jpg",
    category: "ao-thun",
    badge: "sale"
  },
  {
    id: "14",
    name: "Áo Thun Nam ICONDENIM EST.19 ORGNLS",
    price: 279000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-thun-nam-icondenim-est-19-orgnls-11_b174cfebea4d4858ae02125cc88cbdb9_1024x1024.jpg",
    category: "ao-thun",
    badge: "hot"
  },
  {
    id: "15",
    name: "Áo Thun Nam ICONDENIM League",
    price: 279000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-thun-nam-icondenim-league-2_cccb89b1597242a8913607dc279f776b_1024x1024.jpg",
    category: "ao-thun",
    badge: "hot"
  },
  {
    id: "16",
    name: "Áo Thun Nam ICONDENIM Campus Fade",
    price: 279000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-thun-nam-icondenim-campus-fade-1_34fe4b1725194899b6b165307e6d9ac1_1024x1024.jpg",
    category: "ao-thun",
    badge: "hot"
  },
  // Quần short
  {
    id: "17",
    name: "Quần Short Nam TPSTORE Outdoor",
    price: 289000,
    originalPrice: 380000,
    image: "https://cdn.hstatic.net/products/1000253775/160_short_261-14_94f208c275d548f391048e86ac546548_large.jpg",
    category: "quan-short",
    badge: "sale"
  },
  {
    id: "18",
    name: "Quần Short Nam TPSTORE Minimal",
    price: 349000,
    image: "https://cdn.hstatic.net/products/1000253775/quan-short-nam-icondenim-movement-5_2c4d3390444a430ea5891391a7e46774_1024x1024.jpg",
    category: "quan-short"
  },
  {
    id: "19",
    name: "Quần Short Nam TPSTORE ICONDENIM Movement",
    price: 269000,
    image: "https://cdn.hstatic.net/products/1000253775/160_short_261-10_bd1ea9cdf6e74104b6f3fc2f740a2bfb_1024x1024.jpg",
    category: "quan-short",
    badge: "new"
  },
  {
    id: "20",
    name: "Quần Short Nam Denim ICONDENIM Star",
    price: 299000,
    image: "https://cdn.hstatic.net/products/1000253775/quan-short-nam-denim-icondenim-star_10_640497da2aab48e8bcd18095bd972350_1024x1024.jpg",
    category: "quan-short"
  },
  {
    id: "21",
    name: "Quần Short Nam ICONDENIM Insignia ID",
    price: 299000,
    image: "https://cdn.hstatic.net/products/1000253775/quan-short-nam-icondenim-insignia-id-1_b620452a7a3e4a47bdacc5fb89c9c4af_1024x1024.jpg",
    category: "quan-short"
  },
  {
    id: "22",
    name: "Quần Short Nam ICONDENIM Speckled",
    price: 299000,
    image: "https://cdn.hstatic.net/products/1000253775/quan-short-nam-icondenim-speckled_168ad9089c4441d4bdd77bd0b8332b26_1024x1024.jpg",
    category: "quan-short"
  },
  // Áo sơ mi
  {
    id: "23",
    name: "Quần Short Jeans Nam ICON105 TPSTORE",
    price: 359000,
    image: "https://cdn.hstatic.net/products/1000253775/quan-short-jean-nam-icondenim-icon105-dark-grey-10_9039c8608d304ea3ba356fa251757f31_large.jpg",
    category: "quan-short",
    badge: "new"
  },
  {
    id: "24",
    name: "Áo Sơ Mi Tay Dài Flannel Nam ICONDENIM Moonset TPSTORE",
    price: 319000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-so-mi-flannel-nam-icondenim-moonset-1_d037bf873bcd48b19aaa876185e53126_1024x1024.jpg",
    category: "ao-so-mi"
  },
  {
    id: "25",
    name: "Áo Sơ Mi Nam Cuban ICONDENIM 3D Mind's Maze Jacquard Weaving",
    price: 389000,
    originalPrice: 499000,
    image: "https://cdn.hstatic.net/products/1000253775/160_somi_270-14_65507790126a469cb76fbd1c9a3c883e_1024x1024.jpg",
    category: "ao-so-mi",
    badge: "sale"
  },
  {
    id: "26",
    name: "Áo Sơ Mi Nam ICONDENIM Workday Ease",
    price: 389000,
    originalPrice: 499000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-so-mi-nam-icondenim-workday-ease-12_d5e48fa285344a90a3049c65ed85e5e3_1024x1024.jpg",
    category: "ao-so-mi",
    badge: "sale"
  },
  {
    id: "27",
    name: "Áo Sơ Mi Nam Tay Ngắn ICONDENIM Gridline",
    price: 389000,
    originalPrice: 499000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-so-mi-nam-tay-ngan-icondenim-gridline-1_2e589aa8f06744228215684997c904c5_1024x1024.jpg",
    category: "ao-so-mi",
    badge: "sale"
  },
  {
    id: "28",
    name: "Áo Sơ Mi Nam ICONDENIM Iron Indigo",
    price: 389000,
    originalPrice: 499000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-so-mi-nam-icondenim-iron-indigo-3_a90886fab7114caea8479948621a2e7b_1024x1024.jpg",
    category: "ao-so-mi",
    badge: "sale"
  },
  {
    id: "29",
    name: "Áo Sơ Mi Nam Tay Dài ICONDENIM Mississippi",
    price: 389000,
    originalPrice: 499000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-so-mi-nam-icondenim-mississippi-5_1b37d8b6c87c4e3898bdf0aad9caab9d_1024x1024.jpg",
    category: "ao-so-mi",
    badge: "sale"
  },
  // Áo khoác
  {
    id: "30",
    name: "Áo Khoác Jeans Nam ICONDENIM Skyfold TPSTORE",
    price: 459000,
    image: "https://cdn.hstatic.net/products/1000253775/160_ao_khoac_255-1_5e105f0099084f59aa38330c157c9998_1024x1024.jpg",
    category: "ao-khoac",
    badge: "hot"
  },
  {
    id: "31",
    name: "Áo Khoác Varsity Nam ICONDENIM Stallion Club TPSTORE",
    price: 529000,
    originalPrice: 699000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-khoac-varsity-nam-icondenim-stallion-club-1_3a1a38ecefc54bad9e43a19c8dfb50c2_1024x1024.jpg",
    category: "ao-khoac",
    badge: "sale"
  },
  {
    id: "32",
    name: "Áo Polo Nam ICONDENIM Braided Stripes",
    price: 599000,
    image: "https://cdn.hstatic.net/products/1000253775/160_ao_polo_241-1_4516b05b83f64514af9e912b42105ecd_large.jpg",
    category: "ao-polo",
    badge: "new"
  },
  {
    id: "33",
    name: "Áo Khoác Phao Nam ICONDENIM Snowward",
    price: 679000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-khoac-phao-nam-icondenim-snowward-12_fc0109c885d34be18956b76b72270ce0_1024x1024.jpg",
    category: "ao-khoac"
  },
  {
    id: "34",
    name: "Áo Khoác Gió Nam ICONDENIM Phối Nón Rời",
    price: 679000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-khoac-gio-nam-icondenim-phoi-non-roi-4_a9ed7102382e416497687355dea0ef99_1024x1024.jpg",
    category: "ao-khoac"
  },
  {
    id: "35",
    name: "Áo Khoác Varsity Nam ICONDENIM Orginals",
    price: 679000,
    image: "https://cdn.hstatic.net/products/1000253775/ao_khoac_varsity_nam_icondenim_orginals-4_4627d1e96fd74e4e8813012ff2ea1dcd_1024x1024.jpg",
    category: "ao-khoac"
  },
  {
    id: "36",
    name: "Áo Khoác Varsity Nam ICONDENIM Heritage",
    price: 679000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-khoac-varsity-nam-icondenim-heritage-1_0ca390dd3c734eed8eaa176a87e97046_1024x1024.jpg",
    category: "ao-khoac"
  },
  {
    id: "37",
    name: "Áo Khoác Phao Ghile Nam ICONDENIM",
    price: 679000,
    image: "https://cdn.hstatic.net/products/1000253775/160_ao_khoac_242-7_cc0f9cd99ef44b4d9fd10eba508ee140_large.jpg",
    category: "ao-khoac"
  },
  // Áo Polo thêm
  {
    id: "38",
    name: "Áo Polo Nam TPSTORE Disney Mickey Grid",
    price: 279000,
    image: "https://cdn.hstatic.net/products/1000253775/-grid-ao-polo-nam-disney-mickey-grid-ao-polo-nam-disney-mickey-gridpng_f0bba2a80ac644e5ac1399de3fbb9632_large.png",
    category: "ao-polo",
    badge: "new"
  },
  {
    id: "39",
    name: "Áo Polo Nam ICONDENIM Shoulder Line",
    price: 329000,
    originalPrice: 450000,
    image: "https://cdn.hstatic.net/products/1000253775/160_ao_polo_237-4_105c4710ac9e409fa1355164ce917963_1024x1024.jpg",
    category: "ao-polo",
    badge: "sale"
  },
  {
    id: "40",
    name: "Áo Polo Nam Marvel Super Soldier",
    price: 299000,
    image: "https://cdn.hstatic.net/products/1000253775/38-ao-polo-nam-marvel-super-soldier_a0e68da884704547820143a255d53e0e_1024x1024.png",
    category: "ao-polo"
  },
  {
    id: "41",
    name: "Áo Polo Nam ICONDENIM Urban Accent",
    price: 269000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-polo-nam-icondenim-urban-accent-11_9638cb30622e479790bea3148390ac67_1024x1024.jpg",
    category: "ao-polo",
    badge: "hot"
  },
  {
    id: "42",
    name: "Áo Polo Nam ICONDENIM Quarter Zip",
    price: 269000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-polo-nam-icondenim-quarter-zip-14_6c79d70490154c30945c9d60b482542b_1024x1024.jpg",
    category: "ao-polo",
    badge: "hot"
  },
  // Quần Tây thêm
  {
    id: "43",
    name: "Quần Tây Nam TPSTORE ICONDENIM Axis Wide",
    price: 479000,
    image: "https://cdn.hstatic.net/products/1000253775/quan-tay-nam-icondenim-axis-wide-1_dff9d8b2c1a04988a24eb27f00104b8f_1024x1024.jpg",
    category: "quan-tay",
    badge: "new"
  },
  {
    id: "44",
    name: "Quần Tây Nam TPSTORE ICONDENIM City Straight",
    price: 429000,
    originalPrice: 550000,
    image: "https://cdn.hstatic.net/products/1000253775/quan-tay-nam-icondenim-city-straight-11_7c0c2618c51b4515baaf8c9a783aa01b_1024x1024.jpg",
    category: "quan-tay",
    badge: "sale"
  },
  {
    id: "45",
    name: "Quần Tây Nam ICONDENIM Button Sidetab",
    price: 499000,
    image: "https://product.hstatic.net/1000253775/product/160_quan_tay_068-6_47e83a8862134febb5afe71c7a7b8272_1024x1024.jpg",
    category: "quan-tay"
  },
  {
    id: "46",
    name: "Quần Tây Nam Ống Suông ICONDENIM Sidetab Straight Fit",
    price: 459000,
    image: "https://product.hstatic.net/1000253775/product/quan-tay-nam-ong-suong-mau-be_345387cabcbe483483d2a2b30986285a_1024x1024.png",
    category: "quan-tay",
    badge: "hot"
  },
  {
    id: "47",
    name: "Quần Tây Nam ICONDENIM Slim Ratchet Straps",
    price: 459000,
    image: "https://cdn.hstatic.net/products/1000253775/ban_sao_cua_f66da0b4-7617-4eb2-9ab7-616cc35a4512_7eaa098b5bc643f79894d4ce430be9b0_1024x1024.jpg",
    category: "quan-tay",
    badge: "hot"
  },
  {
    id: "48",
    name: "Quần Tây Nam Sorona ICONDENIM Flexible Pant",
    price: 459000,
    image: "https://product.hstatic.net/1000253775/product/han3545_c209ed443b9f4320b14b7ea817dd8db2_1024x1024.png",
    category: "quan-tay",
    badge: "hot"
  },
  {
    id: "49",
    name: "Quần Tây Nam ICONDENIM Axis Wide",
    price: 459000,
    image: "https://cdn.hstatic.net/products/1000253775/quan-tay-nam-icondenim-axis-wide-1_dff9d8b2c1a04988a24eb27f00104b8f_1024x1024.jpg",
    category: "quan-tay",
    badge: "hot"
  },
  // Quần Jogger thêm
  {
    id: "50",
    name: "Quần Tây Nam Sorona ICONDENIM Flexible Pant",
    price: 389000,
    image: "https://product.hstatic.net/1000253775/product/160_quan_tay_3m-11_4531e71794c8437d80d264ff027b5c06_1024x1024.jpg",
    category: "quan-jogger",
    badge: "new"
  },
  {
    id: "51",
    name: "Quần Jogger Nam TPSTORE Street",
    price: 359000,
    originalPrice: 480000,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop",
    category: "quan-jogger",
    badge: "sale"
  },
  {
    id: "52",
    name: "Quần Jogger Nam TPSTORE Cargo",
    price: 429000,
    image: "https://joggerstore.vn/wp-content/uploads/2023/02/1-1-300x350.jpg",
    category: "quan-jogger",
    badge: "hot"
  },
  {
    id: "53",
    name: "Quần Jogger Nam TPSTORE Basic",
    price: 329000,
    image: "https://bizweb.dktcdn.net/thumb/grande/100/396/594/products/283249320-762482398439863-654363557552468593-n.jpg?v=1707302383460",
    category: "quan-jogger"
  },
  {
    id: "54",
    name: "Quần jogger túi hộp",
    price: 329000,
    image: "https://image.hm.com/assets/hm/8c/ea/8cea565db2dc743e2c222da7d30379a0a0e79ba5.jpg?imwidth=2160",
    category: "quan-jogger"
  },
  
  {
    id: "55",
    name: "Quần Jogger Nam TPSTORE Basic",
    price: 329000,
    image: "https://ann.com.vn/wp-content/uploads/19454_chatgpt-image-14-26-45-21-thg-10-2025_20251021173757.png",
    category: "quan-jogger"
  },
  {
    id: "56",
    name: "Quần Kaki Túi Hộp Jogger ",
    price: 329000,
    image: "https://thoitrangbigsize.vn/wp-content/uploads/2024/03/1-64.jpg",
    category: "quan-jogger"
  },
  // Phụ Kiện
  {
    id: "57",
    name: "Thắt Lưng Nam TPSTORE ICONDENIM Vincent",
    price: 199000,
    originalPrice: 299000,
    image: "https://product.hstatic.net/1000253775/product/160_that_lung_028-1_4352afe64e3e484eac0ef5a0ae7c6c24_1024x1024.jpg",
    category: "phu-kien",
    badge: "hot"
  },
  {
    id: "58",
    name: "Ví Da Nam TPSTORE ICONDENIM Urbane Bifold",
    price: 249000,
    image: "https://cdn.hstatic.net/products/1000253775/vi-da-nam-icondenim-urbane-bifold-1_6d259da7dee7446cb4b5876f05a9c015_1024x1024.jpg",
    category: "phu-kien",
    badge: "new"
  },
  {
    id: "59",
    name: "Nón Lưỡi Trai Nam Disney Pitlane 28 TPSTORE",
    price: 149000,
    image: "https://cdn.hstatic.net/products/1000253775/non-luoi-trai-nam-disney-pitlane-28-60_1e780bb99fae4b329b49b5f09f97eb26_1024x1024.png",
    category: "phu-kien"
  },
  {
    id: "60",
    name: "Túi đeo chéo Nam TPSTORE ICONDENIM leather Pattern ID",
    price: 329000,
    originalPrice: 450000,
    image: "https://cdn.hstatic.net/products/1000253775/tui-deo-cheo-nam-icondenim-leather-pattren-id-1_bc9330abfea941a6a323eafb5a4ce085_1024x1024.jpg",
    category: "phu-kien",
    badge: "sale"
  },
  {
    id: "61",
    name: "Thắt Lưng Nam ICONDENIM Versatile Rotating Head",
    price: 199000,
    originalPrice: 299000,
    image: "https://product.hstatic.net/1000253775/product/that_lung_nam_icondenim_versatile_rotating_head_tay_cam_2_cai_f1300dfbc41c4279bc702c2d9744eb36_1024x1024.jpg",
    category: "phu-kien",
    badge: "hot"
  },
  {
    id: "62",
    name: "Ví Da Nam ICONDENIM DenimStyle",
    price: 249000,
    image: "https://product.hstatic.net/1000253775/product/vi-da-icondenim-denimstyle__3__c295c3b4e4424342aed2cc7f11e75266_1024x1024.jpg",
    category: "phu-kien",
    badge: "new"
  },
  {
    id: "63",
    name: "Nón Lưỡi Trai Nam ICONDENIM Bakerfield",
    price: 149000,
    image: "https://cdn.hstatic.net/products/1000253775/non-luoi-trai-nam-icondenim-bakerfield-3_5d405a0f3b71427bad9fbdb495465a5d_1024x1024.jpg",
    category: "phu-kien"
  },
  {
    id: "64",
    name: "Túi Đeo Chéo Nam ICONDENIM Urban Outlaw",
    price: 329000,
    originalPrice: 450000,
    image: "https://cdn.hstatic.net/products/1000253775/160_tui_042-1_f26f6396193e4d1581fc6b74f815252f_1024x1024.jpg",
    category: "phu-kien",
    badge: "sale"
  },
  {
    id: "65",
    name: "Thắt Lưng Nam ICONDENIM Camouflage Moss",
    price: 199000,
    originalPrice: 299000,
    image: "https://product.hstatic.net/1000253775/product/that-lung-icondenim-camouflage-moss__2__c6a372a38ea44c00b0df92810b239531_1024x1024.jpg",
    category: "phu-kien",
    badge: "hot"
  },
  {
    id: "66",
    name: "Ví Da ICONDENIM ColorSync",
    price: 249000,
    image: "https://product.hstatic.net/1000253775/product/z6189011244908_69e7539c531b3b45b369935c3f535493_de49f1c1a3444e049c4d7b40aea6b685_1024x1024.jpg",
    category: "phu-kien",
    badge: "new"
  },
  {
    id: "67",
    name: "Nón Bucket Nam ICONDENIM Sticker ID",
    price: 149000,
    image: "https://product.hstatic.net/1000253775/product/160_non_059-9_e011230861ae407e844ed2ecebf537b0_1024x1024.jpg",
    category: "phu-kien"
  },
  {
    id: "68",
    name: "Túi Đeo Chéo Nam ICONDENIM Black Reign",
    price: 329000,
    originalPrice: 450000,
    image: "https://cdn.hstatic.net/products/1000253775/160_tui_043-2_5cc1b0918cec436ab3073bbe7315a170_1024x1024.jpg",
    category: "phu-kien",
    badge: "sale"
  },
  // Đồ Hè
  {
    id: "69",
    name: "Áo Sơ Mi Nam Hè Cuban ICONDENIM Stone Mist Tie-Dye",
    price: 199000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-so-mi-nam-cuban-icondenim-stone-mist-tie-dye-2_44f5d4a850244229b6729bf45c529164_1024x1024.jpg",
    category: "do-he",
    badge: "hot"
  },
  {
    id: "70",
    name: "Quần Short Đi Biển TPSTORE",
    price: 269000,
    image: "https://cdn.hstatic.net/products/1000253775/quan-short-nam-icondenim-minimal-luxe-9_c93796a0701b4197b2958bce34f0d3d4_1024x1024.jpg",
    category: "do-he",
    badge: "new"
  },
  {
    id: "71",
    name: "Áo Polo Mát Mẻ TPSTORE Summer",
    price: 289000,
    originalPrice: 380000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-polo-nam-icondenim-urban-spirit-1_c68fe70c2f4a45ffa6c77d0255fd37f2_1024x1024.jpg",
    category: "do-he",
    badge: "sale"
  },
  {
    id: "72",
    name: "Set Đồ Đi Biển TPSTORE",
    price: 449000,
    image: "https://cdn.hstatic.net/products/1000253775/set-do-nam-ngan-icondenim-orgnls-11_1ae03b8ce75c4781b27bda5be1866c36_1024x1024.jpg",
    category: "do-he"
  },
  {
    id: "73",
    name: "Áo Sơ Mi Nam Hè Cuban ICONDENIM Stone Mist Tie-Dye",
    price: 199000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-so-mi-nam-cuban-icondenim-monochrome-mosaic-2_b854d4270a934a21bf2a368aebd8b131_1024x1024.jpg",
    category: "do-he",
    badge: "hot"
  },
  {
    id: "74",
    name: "Quần Short Đi Biển TPSTORE",
    price: 269000,
    image: "https://cdn.hstatic.net/products/1000253775/160_short_261-10_bd1ea9cdf6e74104b6f3fc2f740a2bfb_1024x1024.jpg",
    category: "do-he",
    badge: "new"
  },
  {
    id: "75",
    name: "Áo Polo Mát Mẻ TPSTORE Summer",
    price: 289000,
    originalPrice: 380000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-polo-nam-icondenim-dualline12_130e81e2d8e84230ad816dc6721a2dde_1024x1024.jpg",
    category: "do-he",
    badge: "sale"
  },
  {
    id: "76",
    name: "Set Đồ Đi Biển TPSTORE",
    price: 449000,
    image: "https://cdn.hstatic.net/products/1000253775/160_set_bo_096-5_001253b1562c403eb3e83cab4f25f8e3_1024x1024.jpg",
    category: "do-he"
  },
  // Jeans
  {
    id: "77",
    name: "Quần Jeans Nam ICONDENIM Dark Mode",
    price: 459000,
    image: "https://cdn.hstatic.net/products/1000253775/quan-jeans-nam-icondenim-scar-1-1_9bc9699ce1dc4b38baad578495da04dd_1024x1024.jpg",
    category: "jeans",
    badge: "hot"
  },
  {
    id: "78",
    name: "Quần Jeans Nam TPSTORE ICONDENIM Elevyn",
    price: 429000,
    originalPrice: 550000,
    image: "https://cdn.hstatic.net/products/1000253775/quan-jeans-nam-icondenim-elevyn-4_75bf65dc5b0b43da8d07306222059cce_1024x1024.jpg",
    category: "jeans",
    badge: "sale"
  },
  {
    id: "79",
    name: "Quần Jeans Nam ICONDENIM Offwhite Baggy",
    price: 489000,
    image: "https://cdn.hstatic.net/products/1000253775/160_jean_243-1_5b03f0ae80e448af8c6119584ac0a00d_1024x1024.jpg",
    category: "jeans",
    badge: "new"
  },
  {
    id: "80",
    name: "Quần Jeans Nam ICONDENIM Moss Sage Tint Wash Form Baggy",
    price: 519000,
    image: "https://cdn.hstatic.net/products/1000253775/anh_viber_2025-07-04_17-52-41-753_0f7914fd655f4cafabe6c6f048db6a1d_1024x1024.jpg",
    category: "jeans"
  },
  {
    id: "81",
    name: "Quần Jeans Nam ICONDENIM Scar",
    price: 519000,
    image: "https://cdn.hstatic.net/products/1000253775/quan-jeans-nam-icondenim-scar-1__1__19079e4dd0cd43858e993fbe497a58e9_1024x1024.jpg",
    category: "jeans"
  },
  {
    id: "82",
    name: "Quần Jeans Nam ICONDENIM Airflex Gọn Nhẹ Linh Hoạt Light Grey",
    price: 519000,
    image: "https://cdn.hstatic.net/products/1000253775/quan-jeans-nam-icondenim-airflex-gon-nhe-linh-hoat-light-grey-4_5756f7967fbf41978fa078947a593420_1024x1024.jpg",
    category: "jeans"
  },
  {
    id: "83",
    name: "Quần Jeans Nam ICON105 Lightweight™ Straight Fit Blue",
    price: 519000,
    image: "https://cdn.hstatic.net/products/1000253775/quan-jean-nam-icon105-lightweight-straight-fit-blue-1_e59936e689b047d9bcdf2ff9d0b1e40e_1024x1024.jpg",
    category: "jeans"
  },
  {
    id: "84",
    name: "Quần Jeans Nam ProCOOL ICONDENIM Light grey Form Slim",
    price: 519000,
    image: "https://product.hstatic.net/1000253775/product/160_jean_237-5_594c8ee833e7434995423c59382a1f86_1024x1024.jpg",
    category: "jeans"
  },
  // Collection Sale 30-4
  {
    id: "85",
    name: "Áo Thun Sale 30-4 TPSTORE",
    price: 149000,
    originalPrice: 299000,
    image: "https://cdn.hstatic.net/products/1000253775/160_ao_thun_726-10_a7c8999341c1446994f1ac7970f47bde_large.jpg",
    category: "sale-30-4",
    badge: "sale"
  },
  {
    id: "86",
    name: "Quần Short Sale 30-4 TPSTORE",
    price: 199000,
    originalPrice: 399000,
    image: "https://cdn.hstatic.net/products/1000253775/quan-short-nam-icondenim-gridline-14_5d0c223bad954e0a888bff73687a0e75_large.jpg",
    category: "sale-30-4",
    badge: "sale"
  },
  {
    id: "87",
    name: "Áo Polo Sale 30-4 TPSTORE",
    price: 179000,
    originalPrice: 359000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-polo-nam-icondenim-urban-spirit-12_10a05552058b4c68830d76757c32f2c4_large.jpg",
    category: "sale-30-4",
    badge: "sale"
  },
  {
    id: "88",
    name: "Áo Khoác Sale 30-4 TPSTORE",
    price: 299000,
    originalPrice: 599000,
    image: "https://cdn.hstatic.net/products/1000253775/ao-khoac-varsity-nam-icondenim-stallion-club-13_42e4f8bd55744bb288baa189a7f3159b_large.jpg",
    category: "sale-30-4",
    badge: "sale"
  },
  // Collection
  {
    id: "89",
    name: "Set Áo Polo + Quần TPSTORE Premium",
    price: 699000,
    originalPrice: 899000,
    image: "https://media.routine.vn/1200x1500/prod/media/10f23pol011pr1-dark-sapphire-ao-polo-nam-9-jpg.webp",
    category: "collection",
    badge: "hot"
  },
  {
    id: "90",
    name: "Set Đồ Công Sở TPSTORE",
    price: 899000,
    image: "https://file.hstatic.net/200000887901/file/_tc_4984x900x900x4.webp",
    category: "collection",
    badge: "new"
  },
  {
    id: "91",
    name: "Set Đồ Dạo Phố TPSTORE",
    price: 649000,
    originalPrice: 850000,
    image: "https://sakos.vn/wp-content/uploads/2023/04/phoi-do-nam-2.jpg",
    category: "collection",
    badge: "sale"
  },
  {
    id: "92",
    name: "Set Đồ Thể Thao TPSTORE",
    price: 599000,
    image: "https://thegioidotap.vn/wp-content/uploads/2024/04/Set-Tap-Gym-Yoga-Nam-Ao-Ngan-Tay-ICADO-AT32-Quan-Jogger-SG9.jpg",
    category: "collection"
  },
  {
    id: "93",
    name: "Set Áo Polo + Quần TPSTORE Premium",
    price: 699000,
    originalPrice: 899000,
    image: "https://justplay.vn/wp-content/uploads/2024/08/21.jpg",
    category: "collection",
    badge: "hot"
  },
  {
    id: "94",
    name: "Set Đồ Công Sở TPSTORE",
    price: 899000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_r5OeXNCtC1Y_psZqMZ5R9AKA4iOf1GsCWQ&s",
    category: "collection",
    badge: "new"
  },
  {
    id: "95",
    name: "Set Đồ Dạo Phố TPSTORE",
    price: 649000,
    originalPrice: 850000,
    image: "https://cdn.hstatic.net/200000503583/file/phoi-do-nam-cardina-42.jpg_639d42f60e1041f7b80461d6bc7afd4d.jpg",
    category: "collection",
    badge: "sale"
  },
  {
    id: "96",
    name: "Set Đồ Thể Thao TPSTORE",
    price: 599000,
    image: "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/544e2e2d42994dcc877ee8ecf57f86c6~tplv-o3syd03w52-resize-webp:800:800.webp?dr=15592&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=e1be8f53&idc=my&from=2378011839",
    category: "collection"
  }
]

export const categories = [
  { id: "ao-thun", name: "Áo Thun", icon: "shirt" },
  { id: "quan-short", name: "Quần Short", icon: "shorts" },
  { id: "ao-so-mi", name: "Áo Sơ Mi", icon: "shirt" },
  { id: "ao-khoac", name: "Áo Khoác", icon: "jacket" },
  { id: "ao-polo", name: "Áo Polo", icon: "shirt" },
  { id: "quan-tay", name: "Quần Tây", icon: "pants" },
  { id: "quan-jogger", name: "Quần Jogger", icon: "pants" },
  { id: "ao-vest", name: "Áo Vest", icon: "vest" },
  { id: "phu-kien", name: "Phụ Kiện", icon: "bag" },
  { id: "do-he", name: "Đồ Hè", icon: "sun" },
  { id: "jeans", name: "Jeans", icon: "pants" },
  { id: "sale-30-4", name: "Sale 30-4", icon: "tag" },
  { id: "collection", name: "Collection", icon: "collection" }
]

export const lookbookImages = [
  {
    id: "1",
    image: "https://storage.googleapis.com/ops-shopee-files-live/live/shopee-blog/2023/03/365a0e6f-phoi-do-voi-ao-bomber-nam-3.jpg",
    alt: "Nam model mặc áo bomber"
  },
  {
    id: "2",
    image: "https://storage.googleapis.com/ops-shopee-files-live/live/shopee-blog/2023/03/551b88ff-cach-phoi-do-voi-ao-polo-nam-1.jpg",
    alt: "Nam model mặc áo polo"
  },
  {
    id: "3",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvd9ILt9IFXF3lvedHc0vzQvCecTQdz7FOyg&s",
    alt: "Nam model mặc áo khoác"
  },
  {
    id: "4",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YXPITvIr32ZlHFVEIy4WPHmggmP4XCijIg&s",
    alt: "Nam model mặc áo gió"
  }
]

export const storeLocations = [
  {
    city: "Hồ Chí Minh",
    count: 11,
    addresses: [
      "297/3 Tô Hiến Thành, P. Hòa Hưng",
      "391/375 Trần Hưng Đạo, P. Cầu Ông Lãnh",
      "401 Phan Xích Long, P. Đức Nhuận",
      "111 Khuông Việt, P. Tân Phú",
      "54 Tô Vĩnh Diện, P. Thủ Đức"
    ]
  },
  {
    city: "Hà Nội",
    count: 2,
    addresses: [
      "26 Phố Lê Đại Hành, P. Hai Bà Trưng",
      "27 Tôn Đức Thắng, P. Văn Miếu - Quốc Tử Giám"
    ]
  },
  {
    city: "Đà Nẵng",
    count: 2,
    addresses: [
      "332 Lê Duẩn, P. Thanh Khê",
      "144 Lý Tự Trọng, P. Hải Châu"
    ]
  },
  {
    city: "Cần Thơ",
    count: 2,
    addresses: [
      "35 Trần Phú, P. Cái Khế",
      "15D Mậu Thân, P. Ninh Kiều"
    ]
  },
  {
    city: "Tiền Giang",
    count: 1,
    addresses: [
      "347 Ấp Bắc, P. Đạo Thanh"
    ]
  },
  {
    city: "Đồng Nai",
    count: 1,
    addresses: [
      "157 Phan Trung, P. Tam Hiệp"
    ]
  }
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN").format(price) + "đ"
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.soldCount).sort((a, b) => (b.soldCount || 0) - (a.soldCount || 0)).slice(0, 5)
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.badge === "new").slice(0, 10)
}

export function getSaleProducts(): Product[] {
  return products.filter((p) => p.badge === "sale")
}

export function getAllProducts(): Product[] {
  return products
}
