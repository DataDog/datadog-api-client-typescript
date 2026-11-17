/**
 * Create a Product Analytics launch returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createProductAnalyticsLaunch"] = true;
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiCreateProductAnalyticsLaunchRequest = {
  body: {
    data: {
      attributes: {
        context: "Let users apply promo codes at checkout.",
        description: "Promo codes at checkout.",
        kpis: [
          {
            id: "7c1e6a52-3a8f-4d4e-9a55-2f1d1c8b6a10",
            title: "Checkout conversion rate",
          },
        ],
        name: "checkout_promo_codes",
        phase: "plan",
        steps: {
          trackingPlan: {
            events: [
              {
                kpis: ["7c1e6a52-3a8f-4d4e-9a55-2f1d1c8b6a10"],
                name: "promo_code_applied",
                trigger: "The user applies a valid promo code.",
                views: ["/checkout"],
              },
            ],
          },
        },
      },
      type: "liftoff",
    },
  },
};

apiInstance
  .createProductAnalyticsLaunch(params)
  .then((data: v2.ProductAnalyticsLaunchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
