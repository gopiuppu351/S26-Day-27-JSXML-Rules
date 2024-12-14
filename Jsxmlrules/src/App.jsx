import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div className='BGColor'>
      <h1 className='mainHeading'>Best mobile phones under ₹25,000 in December 2024: Redmi Note 14 Pro, OnePlus Nord CE 4, Poco F6 and more</h1>
      <div>
      <h2>1.Redmi Note 14 Pro:</h2>
      <img src='https://www.techballad.com/wp-content/uploads/2023/08/Xiaomi-Redmi-Note-14-Pro-Max.jpg'></img>
      <p><span className='size'>Features:-</span>Redmi Note 14 Pro features a 6.67-inch 1.5K AMOLED display with 3,000 nits of peak brightness and Corning Gorilla Glass Victus 2 protection. The phone comes with a vegan leather finish and is available 
        in three colourways: Spectre Blue, Titan Black and Phantom Purple.The Note 14 Pro is powered by the 
        MediaTek Dimensity 7300 Ultra and supports 8GB of LPDDR4X RAM and up to 256GB of UFS 2.2 storage. 
        For optics, there is a 50MP Sony LYT 600 primary sensor with OIS, an 8MP ultra-wide-angle lens and a 2MP 
        macro sensor. The phone is equipped with a 5,500mAh battery with support for 45W fast charging.Running on 
        HyperOS based on Android 14, Note 14 Pro comes with suppport for many AI features like AI Smart Clip, AI 
        Clear Capture, AI Image Expansion and more. Xiaomi has promised 3 years of OS updates and 4 years of 
        security patches with this device. It also feature IP66, IP68 and IP69 rating for dust and water 
        resistance.</p>
        </div>
        <div>
        <h2>2.OnePlus Nord CE 4:</h2>
        <img src='https://cdn.neow.in/news/images/uploaded/2020/08/1596974239_oneplus-nord-box.jpg'></img>
        <p><span className='size'>Features:-</span>OnePlus Nord CE4 features a 6.7-inch Full HD+ AMOLED display with a 2412 x 1080 pixel resolution and 
          a refresh rate of up to 120Hz. It supports a 210Hz touch sampling rate, 2160Hz PWM dimming, HDR 10+ 
          color certification, and 10-bit color depth.Under the hood, the Nord CE 4 5G is equipped with the 
          Qualcomm Snapdragon 7 Gen 3 SoC and an Adreno 720 GPU, catering to graphics-heavy tasks. It offers up 
          to 8GB of LPDDR4x RAM and up to 256GB of UFS 3.1 storage.For photography, the device features a dual 
          rear camera setup with a 50MP Sony LYT600 primary sensor with OIS and an 8MP Sony IMX355 ultra-wide-angle
          lens. A 16MP front camera takes care of selfies and video calls.The Nord CE 4 comes with a massive 
          5,500 mAh battery with support for 100W fast charging. The phone runs on Oxygen OS 14 based on Android 
          14 and is promised to get 2 years of OS updates and 3 years of security patches.</p>
        </div>
        <div>
          <h2>3.Poco F6:</h2>
          <img src='https://www.proandroid.com/wp-content/uploads/2023/11/poco-f6.png'></img>
          <p><span className='size'>Features:-</span>Poco F6 sports a 6.67-inch AMOLED panel with a 120Hz refresh rate and a resolution of 2712 x 1220 
            pixels. It features a peak brightness of 2400 nits, a 240Hz touch sampling rate, a 2160Hz instant 
            touch sampling rate, and 1920Hz PWM dimming. The device supports Widevine L1, Dolby Vision, and HDR 
            10+.The front of the device is protected by Corning Gorilla Victus, while the back is made of 
            polycarbonate and comes in Titanium and Black colorways.Powered by the Snapdragon 8s Gen 3 chipset 
            based on the 4nm process, the Poco F6 includes an Adreno 735 GPU for graphics-intensive tasks. 
            It offers up to 12GB of LPDDR5x RAM and 512GB of UFS 4.0 storage.</p>
        </div>
        <div>
          <h2>4.Infinix GT 20 Pro:</h2>
          <img src='https://www.notebookcheck.biz/uploads/tx_nbc2/Infinix_GT_20_Pro.JPG'></img>
          <p><span className='size'>Features:-</span>Infinix GT 20 Pro boasts a 6.78-inch Full HD+ LTPS AMOLED display with a peak brightness of 1300 
            nits and a 144Hz refresh rate.The device is equipped with the MediaTek Dimensity 8200 Ultimate chipset
            ,complemented by the Mali G610-MC6 chipset for superior graphics performance.The smartphone features 
            a dedicated gaming display chip, the Pixelworks X5 Turbo, which enhances GPU performance, resolution, 
            and reduces latency. It houses a 5,000mAh battery capable of fast charging with the included 45W 
            adapter.The GT 20 Pro runs on Andoid 14 with Infinix's XOS 14 on top with 2 years of OS udpates and 
            3 years of security patches.</p>
        </div>
        <div>
          <h2>5.Motorola Edge 50 Neo:</h2>
          <img src='https://images.augustman.com/wp-content/uploads/sites/6/2023/09/22140112/Moto-3.jpg'></img>
          <p><span className='size'>Features:-</span>Moto Edge 50 Neo flaunts a 6.4-inch LTPO pOLED display, offering 1.5K resolution, a 120Hz adaptive 
            refresh rate, HDR10+ support, and a peak brightness of 3,000 nits. The display is shielded by Corning
            Gorilla Glass 3, while the device itself carries an IP68 rating for dust and water resistance, alongside MIL-STD-810H certification for enhanced durability. Dolby Atmos-backed dual stereo speakers elevate the multimedia experience.Under the hood, the phone is powered by a MediaTek Dimensity 7300 chipset, coupled with 8GB of LPDDR4X RAM and 256GB of UFS 2.2 storage. Users also benefit from a virtual RAM expansion of up to 8GB, enhanced by AI optimization. The device runs on Android 14 and Motorola has committed to providing five years of software and security updates.For photography enthusiasts, the Moto Edge 50 Neo comes equipped with a triple rear camera setup. This includes a 50MP primary sensor with optical image stabilization (OIS), a 13MP ultra-wide-angle lens, and a 10MP telephoto lens capable of 3x optical zoom. The front houses a 32MP camera for high-quality selfies.Connectivity-wise, the phone supports 5G across 16 bands in India, Bluetooth 5.4, and Wi-Fi 6E. It is fueled by a 4,310mAh battery with 68W TurboPower fast charging and 15W wireless charging capabilities.</p>
        </div>
    </div>
    </div>
  )
}

export default App
