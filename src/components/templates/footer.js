import Divider from "../atoms/divider";


const Footer = () => {
  return (
    <div className="bg-white">
      <div className="w-full justify-center pt-6 pb-4">
      <Divider />
        <div className="pt-4 px-6 pb-6 pt-6">
          <p className="text-xs font-normal text-nobel leading-tight text-center">© 2014 - 2021 PT. Five Jack All Rights Reserved. All other trademarks belong to their respective owners.</p>
        </div>
      </div>
    </div>

  );
};

export default Footer;
