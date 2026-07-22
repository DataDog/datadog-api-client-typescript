import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { RumSdkConfigAttributes } from "./RumSdkConfigAttributes";
import { RumSdkConfigData } from "./RumSdkConfigData";
import { RumSdkConfigDynamicOption } from "./RumSdkConfigDynamicOption";
import { RumSdkConfigDynamicOptionPair } from "./RumSdkConfigDynamicOptionPair";
import { RumSdkConfigMatchOption } from "./RumSdkConfigMatchOption";
import { RumSdkConfigMeta } from "./RumSdkConfigMeta";
import { RumSdkConfigResponse } from "./RumSdkConfigResponse";
import { RumSdkConfigRumAttributes } from "./RumSdkConfigRumAttributes";
import { RumSdkConfigRumUpdateAttributes } from "./RumSdkConfigRumUpdateAttributes";
import { RumSdkConfigSerializedRegex } from "./RumSdkConfigSerializedRegex";
import { RumSdkConfigTracingUrlConfig } from "./RumSdkConfigTracingUrlConfig";
import { RumSdkConfigUpdateAttributes } from "./RumSdkConfigUpdateAttributes";
import { RumSdkConfigUpdateData } from "./RumSdkConfigUpdateData";
import { RumSdkConfigUpdateRequest } from "./RumSdkConfigUpdateRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RumSdkConfigDynamicOptionSerializedType: ["dynamic"],
    RumSdkConfigDynamicOptionStrategy: ["js", "cookie", "dom", "localStorage"],
    RumSdkConfigMatchOptionSerializedType: ["string", "regex"],
    RumSdkConfigSerializedRegexType: ["regex"],
    RumSdkConfigTracingUrlPropagatorType: ["datadog", "b3", "b3multi", "tracecontext"],
    RumSdkConfigType: ["rum_sdk_config"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    RumSdkConfigAttributes: RumSdkConfigAttributes,
    RumSdkConfigData: RumSdkConfigData,
    RumSdkConfigDynamicOption: RumSdkConfigDynamicOption,
    RumSdkConfigDynamicOptionPair: RumSdkConfigDynamicOptionPair,
    RumSdkConfigMatchOption: RumSdkConfigMatchOption,
    RumSdkConfigMeta: RumSdkConfigMeta,
    RumSdkConfigResponse: RumSdkConfigResponse,
    RumSdkConfigRumAttributes: RumSdkConfigRumAttributes,
    RumSdkConfigRumUpdateAttributes: RumSdkConfigRumUpdateAttributes,
    RumSdkConfigSerializedRegex: RumSdkConfigSerializedRegex,
    RumSdkConfigTracingUrlConfig: RumSdkConfigTracingUrlConfig,
    RumSdkConfigUpdateAttributes: RumSdkConfigUpdateAttributes,
    RumSdkConfigUpdateData: RumSdkConfigUpdateData,
    RumSdkConfigUpdateRequest: RumSdkConfigUpdateRequest,
  },
};