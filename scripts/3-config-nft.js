import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x6401050131A4E5087f38A156eB677e2EBC1237f6",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Derpasaur",
        description: "This NFT will give you access to DinoDAO",
        image: readFileSync("scripts/assets/derpasaur.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()