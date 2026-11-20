/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMSdkConfigDynamicOption } from "./RUMSdkConfigDynamicOption";
import { RUMSdkConfigDynamicOptionPair } from "./RUMSdkConfigDynamicOptionPair";
import { RUMSdkConfigMatchOption } from "./RUMSdkConfigMatchOption";
import { RUMSdkConfigTracingUrlConfig } from "./RUMSdkConfigTracingUrlConfig";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * The RUM SDK settings to apply when updating a configuration.
 */
export class RUMSdkConfigRUMUpdateAttributes {
  /**
   * A list of URL configurations for distributed tracing.
   */
  "allowedTracingUrls"?: Array<RUMSdkConfigTracingUrlConfig>;
  /**
   * A list of origin patterns allowed for cross-origin session tracking.
   */
  "allowedTrackingOrigins"?: Array<RUMSdkConfigMatchOption>;
  /**
   * A list of dynamic option key-value pairs.
   */
  "context"?: Array<RUMSdkConfigDynamicOptionPair>;
  /**
   * The default privacy masking level applied to all RUM data.
   */
  "defaultPrivacyLevel": string;
  /**
   * Whether to mask user-interaction action names for privacy.
   */
  "enablePrivacyForActionName": boolean;
  /**
   * The environment tag for the RUM application.
   */
  "env"?: string;
  /**
   * The service name tag for the RUM application.
   */
  "service"?: string;
  /**
   * The percentage of collected sessions for which a replay is captured (0–100).
   */
  "sessionReplaySampleRate": Int64;
  /**
   * The percentage of user sessions to collect (0–100).
   */
  "sessionSampleRate": Int64;
  /**
   * The percentage of requests to forward as APM traces (0–100).
   */
  "traceSampleRate"?: Int64;
  /**
   * Whether to share a session across subdomains of the same site.
   */
  "trackSessionAcrossSubdomains"?: boolean;
  /**
   * A list of dynamic option key-value pairs.
   */
  "user"?: Array<RUMSdkConfigDynamicOptionPair>;
  /**
   * A dynamic configuration option that extracts a value at runtime using a specified strategy.
   */
  "version"?: RUMSdkConfigDynamicOption;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    allowedTracingUrls: {
      baseName: "allowed_tracing_urls",
      type: "Array<RUMSdkConfigTracingUrlConfig>",
    },
    allowedTrackingOrigins: {
      baseName: "allowed_tracking_origins",
      type: "Array<RUMSdkConfigMatchOption>",
    },
    context: {
      baseName: "context",
      type: "Array<RUMSdkConfigDynamicOptionPair>",
    },
    defaultPrivacyLevel: {
      baseName: "default_privacy_level",
      type: "string",
      required: true,
    },
    enablePrivacyForActionName: {
      baseName: "enable_privacy_for_action_name",
      type: "boolean",
      required: true,
    },
    env: {
      baseName: "env",
      type: "string",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    sessionReplaySampleRate: {
      baseName: "session_replay_sample_rate",
      type: "number",
      required: true,
      format: "int64",
    },
    sessionSampleRate: {
      baseName: "session_sample_rate",
      type: "number",
      required: true,
      format: "int64",
    },
    traceSampleRate: {
      baseName: "trace_sample_rate",
      type: "number",
      format: "int64",
    },
    trackSessionAcrossSubdomains: {
      baseName: "track_session_across_subdomains",
      type: "boolean",
    },
    user: {
      baseName: "user",
      type: "Array<RUMSdkConfigDynamicOptionPair>",
    },
    version: {
      baseName: "version",
      type: "RUMSdkConfigDynamicOption",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RUMSdkConfigRUMUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
