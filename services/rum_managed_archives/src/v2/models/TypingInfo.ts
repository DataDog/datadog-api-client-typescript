import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { RUMArchiveConfig } from "./RUMArchiveConfig";
import { RUMArchiveConfigAttributes } from "./RUMArchiveConfigAttributes";
import { RUMArchiveConfigListResponse } from "./RUMArchiveConfigListResponse";
import { RUMArchiveConfigMeta } from "./RUMArchiveConfigMeta";
import { RUMArchiveConfigPage } from "./RUMArchiveConfigPage";
import { RUMArchiveConfigResponse } from "./RUMArchiveConfigResponse";
import { RUMArchiveConfigUpsertAttributes } from "./RUMArchiveConfigUpsertAttributes";
import { RUMArchiveConfigUpsertData } from "./RUMArchiveConfigUpsertData";
import { RUMArchiveConfigUpsertRequest } from "./RUMArchiveConfigUpsertRequest";
import { RUMManagedArchiveErrorResponse } from "./RUMManagedArchiveErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RUMArchiveConfigType: ["rum_archive_config"],
  },
  oneOfMap: {},
  typeMap: {
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    RUMArchiveConfig: RUMArchiveConfig,
    RUMArchiveConfigAttributes: RUMArchiveConfigAttributes,
    RUMArchiveConfigListResponse: RUMArchiveConfigListResponse,
    RUMArchiveConfigMeta: RUMArchiveConfigMeta,
    RUMArchiveConfigPage: RUMArchiveConfigPage,
    RUMArchiveConfigResponse: RUMArchiveConfigResponse,
    RUMArchiveConfigUpsertAttributes: RUMArchiveConfigUpsertAttributes,
    RUMArchiveConfigUpsertData: RUMArchiveConfigUpsertData,
    RUMArchiveConfigUpsertRequest: RUMArchiveConfigUpsertRequest,
    RUMManagedArchiveErrorResponse: RUMManagedArchiveErrorResponse,
  },
};
