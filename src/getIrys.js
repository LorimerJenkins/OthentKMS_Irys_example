import * as othentKMS from '@othent/kms'
import { WebIrys } from "@irys/sdk";


export const getIrys = async () => {
    const wallet = { name: "Othent KMS", provider: othentKMS };
    const url = "https://node2.irys.xyz";
    const token = "arweave";
    const webIrys = new WebIrys({ url, token, wallet });
    await webIrys.ready();
    return webIrys;
};