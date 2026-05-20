import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CustomAttributeConfig } from "./CustomAttributeConfig";
import { CustomAttributeConfigAttributesCreate } from "./CustomAttributeConfigAttributesCreate";
import { CustomAttributeConfigCreate } from "./CustomAttributeConfigCreate";
import { CustomAttributeConfigCreateRequest } from "./CustomAttributeConfigCreateRequest";
import { CustomAttributeConfigResourceAttributes } from "./CustomAttributeConfigResourceAttributes";
import { CustomAttributeConfigResponse } from "./CustomAttributeConfigResponse";
import { CustomAttributeConfigUpdate } from "./CustomAttributeConfigUpdate";
import { CustomAttributeConfigUpdateAttributes } from "./CustomAttributeConfigUpdateAttributes";
import { CustomAttributeConfigUpdateRequest } from "./CustomAttributeConfigUpdateRequest";
import { CustomAttributeConfigsResponse } from "./CustomAttributeConfigsResponse";
import { CustomAttributeSelectOption } from "./CustomAttributeSelectOption";
import { CustomAttributeTypeData } from "./CustomAttributeTypeData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CustomAttributeConfigResourceType: ["custom_attribute"],
    CustomAttributeType: ["URL", "TEXT", "NUMBER", "SELECT"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CustomAttributeConfig: CustomAttributeConfig,
    CustomAttributeConfigAttributesCreate:
      CustomAttributeConfigAttributesCreate,
    CustomAttributeConfigCreate: CustomAttributeConfigCreate,
    CustomAttributeConfigCreateRequest: CustomAttributeConfigCreateRequest,
    CustomAttributeConfigResourceAttributes:
      CustomAttributeConfigResourceAttributes,
    CustomAttributeConfigResponse: CustomAttributeConfigResponse,
    CustomAttributeConfigUpdate: CustomAttributeConfigUpdate,
    CustomAttributeConfigUpdateAttributes:
      CustomAttributeConfigUpdateAttributes,
    CustomAttributeConfigUpdateRequest: CustomAttributeConfigUpdateRequest,
    CustomAttributeConfigsResponse: CustomAttributeConfigsResponse,
    CustomAttributeSelectOption: CustomAttributeSelectOption,
    CustomAttributeTypeData: CustomAttributeTypeData,
  },
};
