import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { GoogleChatAppNamedSpaceResponse } from "./GoogleChatAppNamedSpaceResponse";
import { GoogleChatAppNamedSpaceResponseAttributes } from "./GoogleChatAppNamedSpaceResponseAttributes";
import { GoogleChatAppNamedSpaceResponseData } from "./GoogleChatAppNamedSpaceResponseData";
import { GoogleChatCreateOrganizationHandleRequest } from "./GoogleChatCreateOrganizationHandleRequest";
import { GoogleChatCreateOrganizationHandleRequestAttributes } from "./GoogleChatCreateOrganizationHandleRequestAttributes";
import { GoogleChatCreateOrganizationHandleRequestData } from "./GoogleChatCreateOrganizationHandleRequestData";
import { GoogleChatOrganizationHandleResponse } from "./GoogleChatOrganizationHandleResponse";
import { GoogleChatOrganizationHandleResponseAttributes } from "./GoogleChatOrganizationHandleResponseAttributes";
import { GoogleChatOrganizationHandleResponseData } from "./GoogleChatOrganizationHandleResponseData";
import { GoogleChatOrganizationHandlesResponse } from "./GoogleChatOrganizationHandlesResponse";
import { GoogleChatUpdateOrganizationHandleRequest } from "./GoogleChatUpdateOrganizationHandleRequest";
import { GoogleChatUpdateOrganizationHandleRequestAttributes } from "./GoogleChatUpdateOrganizationHandleRequestAttributes";
import { GoogleChatUpdateOrganizationHandleRequestData } from "./GoogleChatUpdateOrganizationHandleRequestData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    GoogleChatAppNamedSpaceType: ["google-chat-app-named-space"],
    GoogleChatOrganizationHandleType: ["google-chat-organization-handle"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    GoogleChatAppNamedSpaceResponse: GoogleChatAppNamedSpaceResponse,
    GoogleChatAppNamedSpaceResponseAttributes:
      GoogleChatAppNamedSpaceResponseAttributes,
    GoogleChatAppNamedSpaceResponseData: GoogleChatAppNamedSpaceResponseData,
    GoogleChatCreateOrganizationHandleRequest:
      GoogleChatCreateOrganizationHandleRequest,
    GoogleChatCreateOrganizationHandleRequestAttributes:
      GoogleChatCreateOrganizationHandleRequestAttributes,
    GoogleChatCreateOrganizationHandleRequestData:
      GoogleChatCreateOrganizationHandleRequestData,
    GoogleChatOrganizationHandleResponse: GoogleChatOrganizationHandleResponse,
    GoogleChatOrganizationHandleResponseAttributes:
      GoogleChatOrganizationHandleResponseAttributes,
    GoogleChatOrganizationHandleResponseData:
      GoogleChatOrganizationHandleResponseData,
    GoogleChatOrganizationHandlesResponse:
      GoogleChatOrganizationHandlesResponse,
    GoogleChatUpdateOrganizationHandleRequest:
      GoogleChatUpdateOrganizationHandleRequest,
    GoogleChatUpdateOrganizationHandleRequestAttributes:
      GoogleChatUpdateOrganizationHandleRequestAttributes,
    GoogleChatUpdateOrganizationHandleRequestData:
      GoogleChatUpdateOrganizationHandleRequestData,
  },
};
