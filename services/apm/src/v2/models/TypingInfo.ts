import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ServiceList } from "./ServiceList";
import { ServiceListData } from "./ServiceListData";
import { ServiceListDataAttributes } from "./ServiceListDataAttributes";
import { ServiceListDataAttributesMetadataItems } from "./ServiceListDataAttributesMetadataItems";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ServiceListDataType: ["services_list"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ServiceList: ServiceList,
    ServiceListData: ServiceListData,
    ServiceListDataAttributes: ServiceListDataAttributes,
    ServiceListDataAttributesMetadataItems:
      ServiceListDataAttributesMetadataItems,
  },
};
