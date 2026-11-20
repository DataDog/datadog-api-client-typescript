import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMSdkConfigDynamicOption } from "./RUMSdkConfigDynamicOption";
import { RUMSdkConfigDynamicOptionPair } from "./RUMSdkConfigDynamicOptionPair";
import { RUMSdkConfigMatchOption } from "./RUMSdkConfigMatchOption";
import { RUMSdkConfigTracingUrlConfig } from "./RUMSdkConfigTracingUrlConfig";

/**
 * The RUM SDK settings for a configuration.
 */
export class RUMSdkConfigRUMAttributes {
  /**
   * A list of URL configurations for distributed tracing.
   */
  "allowedTracingUrls"?: Array<RUMSdkConfigTracingUrlConfig>;
  /**
   * A list of origin patterns allowed for cross-origin session tracking.
   */
  "allowedTrackingOrigins"?: Array<RUMSdkConfigMatchOption>;
  /**
   * The ID of the RUM application this configuration belongs to.
   */
  "applicationId": string;
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
    applicationId: {
      baseName: "application_id",
      type: "string",
      required: true,
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
    return RUMSdkConfigRUMAttributes.attributeTypeMap;
  }

  public constructor() {}
}
