import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { RumArchiveConfig } from "./RumArchiveConfig";
import { RumArchiveConfigAttributes } from "./RumArchiveConfigAttributes";
import { RumArchiveConfigListResponse } from "./RumArchiveConfigListResponse";
import { RumArchiveConfigMeta } from "./RumArchiveConfigMeta";
import { RumArchiveConfigPage } from "./RumArchiveConfigPage";
import { RumArchiveConfigResponse } from "./RumArchiveConfigResponse";
import { RumArchiveConfigUpsertAttributes } from "./RumArchiveConfigUpsertAttributes";
import { RumArchiveConfigUpsertData } from "./RumArchiveConfigUpsertData";
import { RumArchiveConfigUpsertRequest } from "./RumArchiveConfigUpsertRequest";
import { RumManagedArchiveErrorResponse } from "./RumManagedArchiveErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RumArchiveConfigType: ["rum_archive_config"],
  },
  oneOfMap: {},
  typeMap: {
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    RumArchiveConfig: RumArchiveConfig,
    RumArchiveConfigAttributes: RumArchiveConfigAttributes,
    RumArchiveConfigListResponse: RumArchiveConfigListResponse,
    RumArchiveConfigMeta: RumArchiveConfigMeta,
    RumArchiveConfigPage: RumArchiveConfigPage,
    RumArchiveConfigResponse: RumArchiveConfigResponse,
    RumArchiveConfigUpsertAttributes: RumArchiveConfigUpsertAttributes,
    RumArchiveConfigUpsertData: RumArchiveConfigUpsertData,
    RumArchiveConfigUpsertRequest: RumArchiveConfigUpsertRequest,
    RumManagedArchiveErrorResponse: RumManagedArchiveErrorResponse,
  },
};
