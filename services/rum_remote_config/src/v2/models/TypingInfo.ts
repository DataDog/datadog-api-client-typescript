import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { RUMSdkConfigAttributes } from "./RUMSdkConfigAttributes";
import { RUMSdkConfigData } from "./RUMSdkConfigData";
import { RUMSdkConfigDynamicOption } from "./RUMSdkConfigDynamicOption";
import { RUMSdkConfigDynamicOptionPair } from "./RUMSdkConfigDynamicOptionPair";
import { RUMSdkConfigMatchOption } from "./RUMSdkConfigMatchOption";
import { RUMSdkConfigMeta } from "./RUMSdkConfigMeta";
import { RUMSdkConfigRUMAttributes } from "./RUMSdkConfigRUMAttributes";
import { RUMSdkConfigRUMUpdateAttributes } from "./RUMSdkConfigRUMUpdateAttributes";
import { RUMSdkConfigResponse } from "./RUMSdkConfigResponse";
import { RUMSdkConfigSerializedRegex } from "./RUMSdkConfigSerializedRegex";
import { RUMSdkConfigTracingUrlConfig } from "./RUMSdkConfigTracingUrlConfig";
import { RUMSdkConfigUpdateAttributes } from "./RUMSdkConfigUpdateAttributes";
import { RUMSdkConfigUpdateData } from "./RUMSdkConfigUpdateData";
import { RUMSdkConfigUpdateRequest } from "./RUMSdkConfigUpdateRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RUMSdkConfigDynamicOptionSerializedType: ["dynamic"],
    RUMSdkConfigDynamicOptionStrategy: ["js", "cookie", "dom", "localStorage"],
    RUMSdkConfigMatchOptionSerializedType: ["string", "regex"],
    RUMSdkConfigSerializedRegexType: ["regex"],
    RUMSdkConfigTracingUrlPropagatorType: [
      "datadog",
      "b3",
      "b3multi",
      "tracecontext",
    ],
    RUMSdkConfigType: ["rum_sdk_config"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    RUMSdkConfigAttributes: RUMSdkConfigAttributes,
    RUMSdkConfigData: RUMSdkConfigData,
    RUMSdkConfigDynamicOption: RUMSdkConfigDynamicOption,
    RUMSdkConfigDynamicOptionPair: RUMSdkConfigDynamicOptionPair,
    RUMSdkConfigMatchOption: RUMSdkConfigMatchOption,
    RUMSdkConfigMeta: RUMSdkConfigMeta,
    RUMSdkConfigRUMAttributes: RUMSdkConfigRUMAttributes,
    RUMSdkConfigRUMUpdateAttributes: RUMSdkConfigRUMUpdateAttributes,
    RUMSdkConfigResponse: RUMSdkConfigResponse,
    RUMSdkConfigSerializedRegex: RUMSdkConfigSerializedRegex,
    RUMSdkConfigTracingUrlConfig: RUMSdkConfigTracingUrlConfig,
    RUMSdkConfigUpdateAttributes: RUMSdkConfigUpdateAttributes,
    RUMSdkConfigUpdateData: RUMSdkConfigUpdateData,
    RUMSdkConfigUpdateRequest: RUMSdkConfigUpdateRequest,
  },
};
