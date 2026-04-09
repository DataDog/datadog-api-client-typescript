import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { SecureEmbedCreateRequest } from "./SecureEmbedCreateRequest";
import { SecureEmbedCreateRequestAttributes } from "./SecureEmbedCreateRequestAttributes";
import { SecureEmbedCreateRequestData } from "./SecureEmbedCreateRequestData";
import { SecureEmbedCreateResponse } from "./SecureEmbedCreateResponse";
import { SecureEmbedCreateResponseAttributes } from "./SecureEmbedCreateResponseAttributes";
import { SecureEmbedCreateResponseData } from "./SecureEmbedCreateResponseData";
import { SecureEmbedGetResponse } from "./SecureEmbedGetResponse";
import { SecureEmbedGetResponseAttributes } from "./SecureEmbedGetResponseAttributes";
import { SecureEmbedGetResponseData } from "./SecureEmbedGetResponseData";
import { SecureEmbedGlobalTime } from "./SecureEmbedGlobalTime";
import { SecureEmbedSelectableTemplateVariable } from "./SecureEmbedSelectableTemplateVariable";
import { SecureEmbedUpdateRequest } from "./SecureEmbedUpdateRequest";
import { SecureEmbedUpdateRequestAttributes } from "./SecureEmbedUpdateRequestAttributes";
import { SecureEmbedUpdateRequestData } from "./SecureEmbedUpdateRequestData";
import { SecureEmbedUpdateResponse } from "./SecureEmbedUpdateResponse";
import { SecureEmbedUpdateResponseAttributes } from "./SecureEmbedUpdateResponseAttributes";
import { SecureEmbedUpdateResponseData } from "./SecureEmbedUpdateResponseData";
import { SecureEmbedViewingPreferences } from "./SecureEmbedViewingPreferences";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SecureEmbedCreateResponseType: ["secure_embed_create_response"],
    SecureEmbedGetResponseType: ["secure_embed_get_response"],
    SecureEmbedGlobalTimeLiveSpan: [
      "15m",
      "1h",
      "4h",
      "1d",
      "2d",
      "1w",
      "1mo",
      "3mo",
    ],
    SecureEmbedRequestType: ["secure_embed_request"],
    SecureEmbedShareType: ["secure_embed"],
    SecureEmbedStatus: ["active", "paused"],
    SecureEmbedUpdateRequestType: ["secure_embed_update_request"],
    SecureEmbedUpdateResponseType: ["secure_embed_update_response"],
    SecureEmbedViewingPreferencesTheme: ["system", "light", "dark"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    SecureEmbedCreateRequest: SecureEmbedCreateRequest,
    SecureEmbedCreateRequestAttributes: SecureEmbedCreateRequestAttributes,
    SecureEmbedCreateRequestData: SecureEmbedCreateRequestData,
    SecureEmbedCreateResponse: SecureEmbedCreateResponse,
    SecureEmbedCreateResponseAttributes: SecureEmbedCreateResponseAttributes,
    SecureEmbedCreateResponseData: SecureEmbedCreateResponseData,
    SecureEmbedGetResponse: SecureEmbedGetResponse,
    SecureEmbedGetResponseAttributes: SecureEmbedGetResponseAttributes,
    SecureEmbedGetResponseData: SecureEmbedGetResponseData,
    SecureEmbedGlobalTime: SecureEmbedGlobalTime,
    SecureEmbedSelectableTemplateVariable:
      SecureEmbedSelectableTemplateVariable,
    SecureEmbedUpdateRequest: SecureEmbedUpdateRequest,
    SecureEmbedUpdateRequestAttributes: SecureEmbedUpdateRequestAttributes,
    SecureEmbedUpdateRequestData: SecureEmbedUpdateRequestData,
    SecureEmbedUpdateResponse: SecureEmbedUpdateResponse,
    SecureEmbedUpdateResponseAttributes: SecureEmbedUpdateResponseAttributes,
    SecureEmbedUpdateResponseData: SecureEmbedUpdateResponseData,
    SecureEmbedViewingPreferences: SecureEmbedViewingPreferences,
  },
};
