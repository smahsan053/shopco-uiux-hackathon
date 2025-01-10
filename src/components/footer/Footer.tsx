import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] text-black text-opacity-60 px-6 pt-32 py-12">
      {/* Main Footer Content */}
      <div className="grid gap-8 grid-cols-12 lg:grid-cols-12 lg:gap-10">
        {/* Column 1 */}
        <div className="col-span-12 lg:col-span-2 lg:col-start-2">
          <h1 className="font-bold font-integralcf text-2xl text-black">SHOP.CO</h1>
          <p className="mt-4">
            We have clothes that suit your style and which you’re proud to wear.
            From women to men.
          </p>
          <div className="flex gap-4 mt-6">
            <Image
              src="/social/facebook.png"
              alt="Facebook"
              width={24}
              height={24}
            />
            <Image
              src="/social/twitter.png"
              alt="Twitter"
              width={24}
              height={24}
            />
            <Image
              src="/social/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
            />
            <Image
              src="/social/linkedin.png"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* Remaining Columns */}
        <div className="grid grid-cols-2 col-span-12 lg:grid-cols-4 lg:col-span-8 gap-16">
          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-lg text-black">COMPANY</h3>
            <ul className="mt-4 space-y-2">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-lg text-black">HELP</h3>
            <ul className="mt-4 space-y-2">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-lg text-black">FAQ</h3>
            <ul className="mt-4 space-y-2">
              <li>Accounts</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-semibold text-lg text-black">RESOURCES</h3>
            <ul className="mt-4 space-y-2">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>YouTube Playlist</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-black border-opacity-30 mt-12 pt-6 flex flex-wrap justify-between items-center">
        <p className="text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex gap-4">
          <Image src="/payment/visa.png" alt="Visa" width={36} height={24} />
          <Image
            src="/payment/mastercard.png"
            alt="MasterCard"
            width={36}
            height={24}
          />
          <Image
            src="/payment/paypal.png"
            alt="paypal"
            width={36}
            height={24}
          />
          <Image
            src="/payment/googlepay.png"
            alt="Google Pay"
            width={36}
            height={24}
          />
          <Image
            src="/payment/applepay.png"
            alt="Apple Pay"
            width={36}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
