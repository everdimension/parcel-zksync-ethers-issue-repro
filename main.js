import { ethers } from "ethers";
/**
 * Simply importing zksync-ethers leads to a crash:
 * "Class extends value undefined is not a constructor or null"
 */
import { Provider as ZksProvider } from "zksync-ethers";

function run() {
  // never executes
  console.log({ ethers, ZksProvider });
}

run();
