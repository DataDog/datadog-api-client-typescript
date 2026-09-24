/**
 * Get all notebooks returns "OK" response with pagination
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v1.NotebooksApi(configuration);

const params: v1.NotebooksApiListNotebooksRequest = {
  count: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listNotebooksWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
