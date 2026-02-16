import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { MaxSessionDurationUpdateAttributes } from "./MaxSessionDurationUpdateAttributes";
import { MaxSessionDurationUpdateRequest } from "./MaxSessionDurationUpdateRequest";
import { MaxSessionDurationUpdateRequestData } from "./MaxSessionDurationUpdateRequestData";
import { OrgConfigGetResponse } from "./OrgConfigGetResponse";
import { OrgConfigListResponse } from "./OrgConfigListResponse";
import { OrgConfigRead } from "./OrgConfigRead";
import { OrgConfigReadAttributes } from "./OrgConfigReadAttributes";
import { OrgConfigWrite } from "./OrgConfigWrite";
import { OrgConfigWriteAttributes } from "./OrgConfigWriteAttributes";
import { OrgConfigWriteRequest } from "./OrgConfigWriteRequest";
import { SamlConfigurationsUpdateAttributes } from "./SamlConfigurationsUpdateAttributes";
import { SamlConfigurationsUpdateRequest } from "./SamlConfigurationsUpdateRequest";
import { SamlConfigurationsUpdateRequestData } from "./SamlConfigurationsUpdateRequestData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    MaxSessionDurationUpdateRequestDataType: ["max_session_duration"],
    OrgConfigType: ["org_configs"],
    SamlConfigurationsUpdateRequestDataType: ["saml_preferences"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    MaxSessionDurationUpdateAttributes: MaxSessionDurationUpdateAttributes,
    MaxSessionDurationUpdateRequest: MaxSessionDurationUpdateRequest,
    MaxSessionDurationUpdateRequestData: MaxSessionDurationUpdateRequestData,
    OrgConfigGetResponse: OrgConfigGetResponse,
    OrgConfigListResponse: OrgConfigListResponse,
    OrgConfigRead: OrgConfigRead,
    OrgConfigReadAttributes: OrgConfigReadAttributes,
    OrgConfigWrite: OrgConfigWrite,
    OrgConfigWriteAttributes: OrgConfigWriteAttributes,
    OrgConfigWriteRequest: OrgConfigWriteRequest,
    SamlConfigurationsUpdateAttributes: SamlConfigurationsUpdateAttributes,
    SamlConfigurationsUpdateRequest: SamlConfigurationsUpdateRequest,
    SamlConfigurationsUpdateRequestData: SamlConfigurationsUpdateRequestData,
  },
};
