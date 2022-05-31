import { useWallet } from '@solana/wallet-adapter-react';
import { FC, useCallback, useState } from 'react';
import BasicTextFields from "../components/InputsComponent";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';



import { sell } from "../api/src/auction-house";

export const Sell: FC = () => {
    let walletAddress = "";
    
    const { publicKey } = useWallet();
    const [price, setPrice] = useState(''); // '' is the initial state value
    const [mintAddress, setMintAddress] = useState(''); // '' is the initial state value
    const [auctionHouseAddress,setAuctionHouseAddress]= useState(''); // '' is the initial state value
    
    const wallet = useWallet();
   
    function getSell() {
        console.log("ah,auction",auctionHouseAddress);
        

        sell({ auctionHouse: auctionHouseAddress, buyPrice: price, mint: mintAddress, tokenSize: '1', wallet : wallet }).then(x => {

            alert('Create Sell Action'+'Account'+x.account+'MintAddress'+x.mintAddress+'Price'+x.price);
        })
    }
    
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '25ch' },
                    input:{
                        background: "white"
                    }
                }}
                noValidate
                autoComplete="off"
            >
            <TextField 
                label="Auction House Address"
                variant='filled'
                color='success'
                text-color="red"
                onChange={(e) => { setAuctionHouseAddress(e.target.value)}}
                size='small'
            />
            <TextField 
                label="Mint Address"
                variant='filled'
                color='success'
                text-color="red"
                onChange={(e) => { setMintAddress(e.target.value)}}
                size='small'
            />
                        <TextField 
                label="Price"
                variant='filled'
                color='success'
                text-color="red"
                onChange={(e) => { setPrice(e.target.value)}}
                size='small'
            />
    </Box>
            <button
                className="group w-60 m-2 btn animate-pulse disabled:animate-none bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ... "
                onClick={getSell} disabled={!publicKey}
            >
                <div className="hidden group-disabled:block ">
                    Wallet not connected
                </div>
                <span className="block group-disabled:hidden" >
                   Sell
                </span>
            </button>
        </div>
    );
};
