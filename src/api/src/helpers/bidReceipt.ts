import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category PrintBidReceipt
 * @category generated
 */
export type PrintBidReceiptInstructionArgs = {
  receiptBump: number;
};
/**
 * @category Instructions
 * @category PrintBidReceipt
 * @category generated
 */
const printBidReceiptStruct = new beet.BeetArgsStruct<
  PrintBidReceiptInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['receiptBump', beet.u8],
  ],
  'PrintBidReceiptInstructionArgs',
);
/**
 * Accounts required by the _printBidReceipt_ instruction
 * @category Instructions
 * @category PrintBidReceipt
 * @category generated
 */
export type PrintBidReceiptInstructionAccounts = {
  receipt: web3.PublicKey;
  bookkeeper: web3.PublicKey;
  instruction: web3.PublicKey;
};

const printBidReceiptInstructionDiscriminator = [94, 249, 90, 230, 239, 64, 68, 218];

/**
 * Creates a _PrintBidReceipt_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category PrintBidReceipt
 * @category generated
 */
export function createPrintBidReceiptInstruction(
  accounts: PrintBidReceiptInstructionAccounts,
  args: PrintBidReceiptInstructionArgs,
) {
  const { receipt, bookkeeper, instruction } = accounts;

  const [data] = printBidReceiptStruct.serialize({
    instructionDiscriminator: printBidReceiptInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: receipt,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: bookkeeper,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: instruction,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk'),
    keys,
    data,
  });
  return ix;
}