import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSdkConfigDynamicOption } from "./RumSdkConfigDynamicOption";
import { RumSdkConfigDynamicOptionPair } from "./RumSdkConfigDynamicOptionPair";
import { RumSdkConfigMatchOption } from "./RumSdkConfigMatchOption";
import { RumSdkConfigTracingUrlConfig } from "./RumSdkConfigTracingUrlConfig";

/**
 * The RUM SDK settings to apply when updating a configuration.
 */
export class RumSdkConfigRumUpdateAttributes {
  /**
   * A list of URL configurations for distributed tracing.
   */
  "allowedTracingUrls"?: Array<RumSdkConfigTracingUrlConfig>;
  /**
   * A list of origin patterns allowed for cross-origin session tracking.
   */
  "allowedTrackingOrigins"?: Array<RumSdkConfigMatchOption>;
  /**
   * A list of dynamic option key-value pairs.
   */
  "context"?: Array<RumSdkConfigDynamicOptionPair>;
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
  "sessionReplaySampleRate": number;
  /**
   * The percentage of user sessions to collect (0–100).
   */
  "sessionSampleRate": number;
  /**
   * The percentage of requests to forward as APM traces (0–100).
   */
  "traceSampleRate"?: number;
  /**
   * Whether to share a session across subdomains of the same site.
   */
  "trackSessionAcrossSubdomains"?: boolean;
  /**
   * A list of dynamic option key-value pairs.
   */
  "user"?: Array<RumSdkConfigDynamicOptionPair>;
  /**
   * A dynamic configuration option that extracts a value at runtime using a specified strategy.
   */
  "version"?: RumSdkConfigDynamicOption;
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
      type: "Array<RumSdkConfigTracingUrlConfig>",
    },
    allowedTrackingOrigins: {
      baseName: "allowed_tracking_origins",
      type: "Array<RumSdkConfigMatchOption>",
    },
    context: {
      baseName: "context",
      type: "Array<RumSdkConfigDynamicOptionPair>",
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
      type: "Array<RumSdkConfigDynamicOptionPair>",
    },
    version: {
      baseName: "version",
      type: "RumSdkConfigDynamicOption",
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
    return RumSdkConfigRumUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
