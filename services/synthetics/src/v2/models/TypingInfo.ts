import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { OnDemandConcurrencyCap } from "./OnDemandConcurrencyCap";
import { OnDemandConcurrencyCapAttributes } from "./OnDemandConcurrencyCapAttributes";
import { OnDemandConcurrencyCapResponse } from "./OnDemandConcurrencyCapResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    OnDemandConcurrencyCapType: ["on_demand_concurrency_cap"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    OnDemandConcurrencyCap: OnDemandConcurrencyCap,
    OnDemandConcurrencyCapAttributes: OnDemandConcurrencyCapAttributes,
    OnDemandConcurrencyCapResponse: OnDemandConcurrencyCapResponse,
  },
};
