
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { CreateNFTS } from '../../components/CreateNFTS';
import { FetchNFTS} from '../../components/FetchNFTS';
export const BasicsView: FC = ({ }) => {

  return (
<div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Basics
        </h1>
        {/* CONTENT GOES HERE */}
        <div className="text-center">
          <SignMessage/>
          <CreateNFTS />
          <FetchNFTS />
        </div>
      </div>
    </div>
  );
};
