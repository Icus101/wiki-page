import Link from "next/link";
import React from "react";
import { sidebarData } from "./sidebarData";

const Section1 = () => {
  return (
    <div className="mb-[50px]">
      <div className="flex">
        <div className="w-[30%]">
           <h1 className="text-[36px] font-[700]">Zcash Tech</h1>
          <nav>
            <ul>
              {sidebarData.map((item, index) => {
                return (
                  <li key={index} className=" text-left">
                    <Link
                      legacyBehavior
                      href={item.path}
                      className="hover:bg-[#031736]    "
                    >
                      <a className=" flex items-center p-[10px_15px] hover:text-[#1ADCAB] rounded-[10px] w-[100%] text-[13px] font-[300]">
                        <span className="mr-[15px] w-[22px] align-middle">
                          {<item.icons />}
                        </span>
                        <span className="">{item.title}</span>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="w-full">
          <h1 className="text-[48px] font-[700]">Zcash Lightwallet Nodes</h1>
          <h1 className="text-[36px] font-[700] mb-[15px]">Introduction</h1>
          <p className="leading-[24px] mb-[15px]">
            Zcash, a privacy-focused cryptocurrency, supports a feature called
            "lightwallet nodes" that enables users to interact with the Zcash
            blockchain without downloading the entire blockchain history. This
            wiki page provides an overview of lightwallet nodes, the role of the
            "lightwalletd" service in the Zcash ecosystem, a current list of
            lightwallet node servers, and instructions on how to change servers
            in popular wallets like Ywallet and Zingo.
          </p>
          <div className="mb-[15px]">
            <a className="text-[#1a56db] mb-[15px]" href="">
              status.lightwalletd.com
            </a>{" "}
            <br />
            <a className="text-[#1a56db]  mb-[15px]" href="">
              status.zcash-infra.com
            </a>
          </div>

          <h1 className="text-[40px] font-[700] leading-[40px] mb-[20px]">
            Lightwalletd Service
          </h1>
          <p className="mb-[10px] leading-[24px]">
            The "lightwalletd" service, short for "lightwallet daemon," plays a
            critical role in Zcash's lightwallet node ecosystem. It acts as an
            intermediary that provides lightweight clients (lightwallets) with
            the information they need to function effectively. Here's a brief
            explainer of the lightwalletd service:
          </p>
          <p className="mb-[15px]">
            <strong>Data Aggregator:</strong> Lightwalletd aggregates data from
            the Zcash blockchain, such as transaction information, block data,
            and shielded pool information.
          </p>
          <p className="mb-[15px]">
            <strong>Simplified Verification:</strong> Lightwalletd performs
            simplified verification of this data, allowing lightwallets to
            access necessary information without having to validate the entire
            blockchain.
          </p>
          <p className="mb-[15px]">
            <strong>Privacy Preservation: </strong> The service maintains the
            privacy of Zcash users by not requiring them to expose their viewing
            keys or personal transaction information.
          </p>
          <p className="mb-[15px]">
            <strong>Efficient Synchronization:</strong> Lightwalletd enables
            efficient synchronization for lightwallets, significantly reducing
            the time and resources required to get up to date with the Zcash
            blockchain.
          </p>
          <h1 className="text-[40px] font-[700] mb-[15px]">
            Current List of Lightwalletd Servers
          </h1>
          <p className="mb-[15px]">
            Here is a list of some current Zcash Lightwallet Nodes that users
            can connect to:
          </p>
          <p className="mb-[15px]">
            North America: https://na.lightwalletd.com
          </p>
          <p className="mb-[15px]">
            South America: https://sa.lightwalletd.com
          </p>
          <p className="mb-[15px]">
            Europe & Africa: https://eu.lightwalletd.com
          </p>
          <p className="mb-[15px]">
            Asia & Oceania: https://ai.lightwalletd.com
          </p>
          <h1 className="text-[40px] font-[700] mb-[10px]">
            Changing Servers in Ywallet/Zingo
          </h1>
          <p className="mb-[15px]">
            Changing the lightwallet node server in Ywallet or Zingo is
            relatively straightforward:
          </p>
          <p className="mb-[15px]">
            Open Ywallet/Zingo: Launch the Ywallet or Zingo application on your
            device.
          </p>
          <p className="mb-[15px]">
            <strong> Access Settings:</strong> Find and access the settings or preferences menu
            within the application.
          </p>
          <p className="mb-[15px]">
            <strong>Select Server: </strong> Look for the option to change the lightwallet node
            server. This option is usually named "Change server" or "Node
            settings."
          </p>
          <p className="mb-[15px]">
            <strong>Enter Server Information:</strong>  You will be prompted to enter the new
            server's address. Input the URL of the desired server from the
            current list or any other server you prefer.
          </p>
          <p className="mb-[15px]">
            <strong>Save or Confirm:</strong>  Save the changes, and the application should now
            connect to the new server.
          </p>
          <p className="mb-[15px]">
            Remember to ensure that the new server is active and reliable to
          </p>
          <h1 className="text-[40px] font-[700] mb-[15px]">Conclusion</h1>
          <p className="mb-[50px]">
            Zcash's lightwallet nodes and the lightwalletd service provide a
            convenient and privacy-preserving way for users to interact with the
            blockchain. The ability to change servers offers flexibility in
            selecting a node that best suits your needs. Stay updated with the
            latest server information for optimal functionality and privacy when
            using Zcash lightwallets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
