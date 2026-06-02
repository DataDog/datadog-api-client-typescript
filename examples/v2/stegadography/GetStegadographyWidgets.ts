/**
 * Get widgets from an image returns "OK" response
 */

import * as fs from "fs";
import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StegadographyApi(configuration);

const params: v2.StegadographyApiGetStegadographyWidgetsRequest = {
  image: {
    data: Buffer.from(
      fs.readFileSync("fixtures/stegadography/image.png", "utf8")
    ),
    name: "fixtures/stegadography/image.png",
  },
};

apiInstance
  .getStegadographyWidgets(params)
  .then((data: v2.StegadographyGetWidgetsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
