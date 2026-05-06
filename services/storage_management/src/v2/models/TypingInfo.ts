import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CloudInventorySyncConfigAWSRequestAttributes } from "./CloudInventorySyncConfigAWSRequestAttributes";
import { CloudInventorySyncConfigAttributes } from "./CloudInventorySyncConfigAttributes";
import { CloudInventorySyncConfigAzureRequestAttributes } from "./CloudInventorySyncConfigAzureRequestAttributes";
import { CloudInventorySyncConfigGCPRequestAttributes } from "./CloudInventorySyncConfigGCPRequestAttributes";
import { CloudInventorySyncConfigResponse } from "./CloudInventorySyncConfigResponse";
import { CloudInventorySyncConfigResponseData } from "./CloudInventorySyncConfigResponseData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { UpsertCloudInventorySyncConfigRequest } from "./UpsertCloudInventorySyncConfigRequest";
import { UpsertCloudInventorySyncConfigRequestAttributes } from "./UpsertCloudInventorySyncConfigRequestAttributes";
import { UpsertCloudInventorySyncConfigRequestData } from "./UpsertCloudInventorySyncConfigRequestData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CloudInventoryCloudProviderId: ["aws", "gcp", "azure"],
    CloudInventoryCloudProviderRequestType: ["cloud_provider"],
    CloudInventorySyncConfigResourceType: ["sync_configs"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CloudInventorySyncConfigAWSRequestAttributes:
      CloudInventorySyncConfigAWSRequestAttributes,
    CloudInventorySyncConfigAttributes: CloudInventorySyncConfigAttributes,
    CloudInventorySyncConfigAzureRequestAttributes:
      CloudInventorySyncConfigAzureRequestAttributes,
    CloudInventorySyncConfigGCPRequestAttributes:
      CloudInventorySyncConfigGCPRequestAttributes,
    CloudInventorySyncConfigResponse: CloudInventorySyncConfigResponse,
    CloudInventorySyncConfigResponseData: CloudInventorySyncConfigResponseData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    UpsertCloudInventorySyncConfigRequest:
      UpsertCloudInventorySyncConfigRequest,
    UpsertCloudInventorySyncConfigRequestAttributes:
      UpsertCloudInventorySyncConfigRequestAttributes,
    UpsertCloudInventorySyncConfigRequestData:
      UpsertCloudInventorySyncConfigRequestData,
  },
};
