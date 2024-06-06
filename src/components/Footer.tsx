import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="w-full container mx-auto p-10 pt-6 bg-black text-white ">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div>
          <h2 className="text-2xl font-semibold">
            Rev<span className="text-purple-600">V</span>Trex
          </h2>
        </div>
        <div>
          <h3 className="lg:mb-2 font-semibold">Let&apos;s connect</h3>
          <p className="lg:text-sm text-xs">
            GopalPura,217421,Jaipur,Rajasthan
          </p>
        </div>
        <div>
          <h3 className="mb-2">Links</h3>
          <p className="lg:text-sm text-xs cursor-pointer hover:text-white  mb-1 text-stone-400">
            Privacy Policy
          </p>
          <p className="lg:text-sm text-xs cursor-pointer hover:text-white  mb-1 text-stone-400">
            Terms & conditions
          </p>
          <p className="lg:text-sm text-xs cursor-pointer hover:text-white  mb-1 text-stone-400">
            Refund Policy
          </p>
        </div>
        <div>
          <h3 className="mb-2">Folllow us</h3>

          <div className="flex items-center space-x-2">
            <IconBrandFacebook />
            <IconBrandTwitter />
            <IconBrandLinkedin />
            <IconBrandInstagram />
          </div>
        </div>
      </div>
      <div className="border-t mt-2 w-full border-neutral-800 flex items-center justify-center">
        <p className="text-sm text-center lg:text-start text-muted mt-2">
          &copy; 2023 MdAllTechSolutiions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
