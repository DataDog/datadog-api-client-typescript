import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ConfluentAccountCreateRequest } from "./ConfluentAccountCreateRequest";
import { ConfluentAccountCreateRequestAttributes } from "./ConfluentAccountCreateRequestAttributes";
import { ConfluentAccountCreateRequestData } from "./ConfluentAccountCreateRequestData";
import { ConfluentAccountResourceAttributes } from "./ConfluentAccountResourceAttributes";
import { ConfluentAccountResponse } from "./ConfluentAccountResponse";
import { ConfluentAccountResponseAttributes } from "./ConfluentAccountResponseAttributes";
import { ConfluentAccountResponseData } from "./ConfluentAccountResponseData";
import { ConfluentAccountUpdateRequest } from "./ConfluentAccountUpdateRequest";
import { ConfluentAccountUpdateRequestAttributes } from "./ConfluentAccountUpdateRequestAttributes";
import { ConfluentAccountUpdateRequestData } from "./ConfluentAccountUpdateRequestData";
import { ConfluentAccountsResponse } from "./ConfluentAccountsResponse";
import { ConfluentResourceRequest } from "./ConfluentResourceRequest";
import { ConfluentResourceRequestAttributes } from "./ConfluentResourceRequestAttributes";
import { ConfluentResourceRequestData } from "./ConfluentResourceRequestData";
import { ConfluentResourceResponse } from "./ConfluentResourceResponse";
import { ConfluentResourceResponseAttributes } from "./ConfluentResourceResponseAttributes";
import { ConfluentResourceResponseData } from "./ConfluentResourceResponseData";
import { ConfluentResourcesResponse } from "./ConfluentResourcesResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ConfluentAccountType: ["confluent-cloud-accounts"],
    ConfluentResourceType: ["confluent-cloud-resources"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ConfluentAccountCreateRequest: ConfluentAccountCreateRequest,
    ConfluentAccountCreateRequestAttributes:
      ConfluentAccountCreateRequestAttributes,
    ConfluentAccountCreateRequestData: ConfluentAccountCreateRequestData,
    ConfluentAccountResourceAttributes: ConfluentAccountResourceAttributes,
    ConfluentAccountResponse: ConfluentAccountResponse,
    ConfluentAccountResponseAttributes: ConfluentAccountResponseAttributes,
    ConfluentAccountResponseData: ConfluentAccountResponseData,
    ConfluentAccountUpdateRequest: ConfluentAccountUpdateRequest,
    ConfluentAccountUpdateRequestAttributes:
      ConfluentAccountUpdateRequestAttributes,
    ConfluentAccountUpdateRequestData: ConfluentAccountUpdateRequestData,
    ConfluentAccountsResponse: ConfluentAccountsResponse,
    ConfluentResourceRequest: ConfluentResourceRequest,
    ConfluentResourceRequestAttributes: ConfluentResourceRequestAttributes,
    ConfluentResourceRequestData: ConfluentResourceRequestData,
    ConfluentResourceResponse: ConfluentResourceResponse,
    ConfluentResourceResponseAttributes: ConfluentResourceResponseAttributes,
    ConfluentResourceResponseData: ConfluentResourceResponseData,
    ConfluentResourcesResponse: ConfluentResourcesResponse,
  },
};
