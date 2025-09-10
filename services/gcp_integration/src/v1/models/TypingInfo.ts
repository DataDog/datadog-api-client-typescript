import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { GCPAccount } from "./GCPAccount";
import { GCPMonitoredResourceConfig } from "./GCPMonitoredResourceConfig";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    GCPMonitoredResourceConfigType: [
      "cloud_function",
      "cloud_run_revision",
      "gce_instance",
    ],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    GCPAccount: GCPAccount,
    GCPMonitoredResourceConfig: GCPMonitoredResourceConfig,
  },
};
