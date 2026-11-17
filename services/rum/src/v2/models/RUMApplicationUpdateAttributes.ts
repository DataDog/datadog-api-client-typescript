import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMApplicationPlatformType } from "./RUMApplicationPlatformType";
import { RUMEventProcessingState } from "./RUMEventProcessingState";
import { RUMProductAnalyticsRetentionStateRequest } from "./RUMProductAnalyticsRetentionStateRequest";

/**
 * RUM application update attributes. Only the attributes you provide are changed. Omitted attributes keep their current value.
 * Changing `product_analytics_retention_state` or `product_analytics_replay_sample_rate` requires the `product_analytics_apps_write` permission.
 */
export class RUMApplicationUpdateAttributes {
  /**
   * Whether flat sampling of Session Replay for APM-correlated RUM sessions is enabled.
   */
  "apmRumFlatSamplingReplayEnabled"?: boolean;
  /**
   * Fraction (0 to 1) of APM-correlated RUM sessions with Session Replay when flat sampling is enabled.
   */
  "apmRumFlatSamplingReplaySampleRate"?: number;
  /**
   * Whether Error Tracking exclusion filters are enabled for the application.
   */
  "errorTrackingExclusionFilterEnabled"?: boolean;
  /**
   * New name of the RUM application. Between 1 and 255 characters.
   */
  "name"?: string;
  /**
   * Sample rate (0-100) of Session Replay for Product Analytics sessions.
   */
  "productAnalyticsReplaySampleRate"?: number;
  /**
   * Retention policy to set for Product Analytics data derived from RUM events. `PREVIEW` is the initial state of a new application and is reported as `NONE` in responses. Setting `MAX` requires the `product_analytics_apps_write` permission.
   */
  "productAnalyticsRetentionState"?: RUMProductAnalyticsRetentionStateRequest;
  /**
   * ID of the RUM SDK remote configuration to associate with the application.
   */
  "remoteConfigId"?: string;
  /**
   * Configures which RUM events are processed and stored for the application. Defaults to `ALL` when creating an application.
   */
  "rumEventProcessingState"?: RUMEventProcessingState;
  /**
   * New list of tags for the RUM application, in `key:value` format. Replaces the existing tags.
   */
  "tags"?: Array<string>;
  /**
   * Type of the RUM application, that is the platform of the RUM SDK. Defaults to `browser` on create.
   */
  "type"?: RUMApplicationPlatformType;
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
    apmRumFlatSamplingReplayEnabled: {
      baseName: "apm_rum_flat_sampling_replay_enabled",
      type: "boolean",
    },
    apmRumFlatSamplingReplaySampleRate: {
      baseName: "apm_rum_flat_sampling_replay_sample_rate",
      type: "number",
      format: "double",
    },
    errorTrackingExclusionFilterEnabled: {
      baseName: "error_tracking_exclusion_filter_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    productAnalyticsReplaySampleRate: {
      baseName: "product_analytics_replay_sample_rate",
      type: "number",
      format: "int32",
    },
    productAnalyticsRetentionState: {
      baseName: "product_analytics_retention_state",
      type: "RUMProductAnalyticsRetentionStateRequest",
    },
    remoteConfigId: {
      baseName: "remote_config_id",
      type: "string",
    },
    rumEventProcessingState: {
      baseName: "rum_event_processing_state",
      type: "RUMEventProcessingState",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "RUMApplicationPlatformType",
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
    return RUMApplicationUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
