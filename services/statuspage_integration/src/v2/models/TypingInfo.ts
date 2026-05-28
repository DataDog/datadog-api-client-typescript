import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { StatuspageAccountCreateAttributes } from "./StatuspageAccountCreateAttributes";
import { StatuspageAccountCreateData } from "./StatuspageAccountCreateData";
import { StatuspageAccountCreateRequest } from "./StatuspageAccountCreateRequest";
import { StatuspageAccountResponse } from "./StatuspageAccountResponse";
import { StatuspageAccountResponseAttributes } from "./StatuspageAccountResponseAttributes";
import { StatuspageAccountResponseData } from "./StatuspageAccountResponseData";
import { StatuspageAccountUpdateAttributes } from "./StatuspageAccountUpdateAttributes";
import { StatuspageAccountUpdateData } from "./StatuspageAccountUpdateData";
import { StatuspageAccountUpdateRequest } from "./StatuspageAccountUpdateRequest";
import { StatuspageUrlSettingCreateAttributes } from "./StatuspageUrlSettingCreateAttributes";
import { StatuspageUrlSettingCreateData } from "./StatuspageUrlSettingCreateData";
import { StatuspageUrlSettingCreateRequest } from "./StatuspageUrlSettingCreateRequest";
import { StatuspageUrlSettingResponse } from "./StatuspageUrlSettingResponse";
import { StatuspageUrlSettingResponseAttributes } from "./StatuspageUrlSettingResponseAttributes";
import { StatuspageUrlSettingResponseData } from "./StatuspageUrlSettingResponseData";
import { StatuspageUrlSettingUpdateAttributes } from "./StatuspageUrlSettingUpdateAttributes";
import { StatuspageUrlSettingUpdateData } from "./StatuspageUrlSettingUpdateData";
import { StatuspageUrlSettingUpdateRequest } from "./StatuspageUrlSettingUpdateRequest";
import { StatuspageUrlSettingsResponse } from "./StatuspageUrlSettingsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    StatuspageAccountType: ["statuspage-account"],
    StatuspageUrlSettingType: ["statuspage-url-setting"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    StatuspageAccountCreateAttributes: StatuspageAccountCreateAttributes,
    StatuspageAccountCreateData: StatuspageAccountCreateData,
    StatuspageAccountCreateRequest: StatuspageAccountCreateRequest,
    StatuspageAccountResponse: StatuspageAccountResponse,
    StatuspageAccountResponseAttributes: StatuspageAccountResponseAttributes,
    StatuspageAccountResponseData: StatuspageAccountResponseData,
    StatuspageAccountUpdateAttributes: StatuspageAccountUpdateAttributes,
    StatuspageAccountUpdateData: StatuspageAccountUpdateData,
    StatuspageAccountUpdateRequest: StatuspageAccountUpdateRequest,
    StatuspageUrlSettingCreateAttributes: StatuspageUrlSettingCreateAttributes,
    StatuspageUrlSettingCreateData: StatuspageUrlSettingCreateData,
    StatuspageUrlSettingCreateRequest: StatuspageUrlSettingCreateRequest,
    StatuspageUrlSettingResponse: StatuspageUrlSettingResponse,
    StatuspageUrlSettingResponseAttributes:
      StatuspageUrlSettingResponseAttributes,
    StatuspageUrlSettingResponseData: StatuspageUrlSettingResponseData,
    StatuspageUrlSettingUpdateAttributes: StatuspageUrlSettingUpdateAttributes,
    StatuspageUrlSettingUpdateData: StatuspageUrlSettingUpdateData,
    StatuspageUrlSettingUpdateRequest: StatuspageUrlSettingUpdateRequest,
    StatuspageUrlSettingsResponse: StatuspageUrlSettingsResponse,
  },
};
