/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMEventProcessingState } from "./RUMEventProcessingState";
import { RUMProductAnalyticsRetentionState } from "./RUMProductAnalyticsRetentionState";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * RUM application update attributes. Only the attributes you provide are changed, omitted attributes keep their current value.
 * Changing `product_analytics_retention_state` or `product_analytics_replay_sample_rate` requires the `product_analytics_apps_write` permission.
 */
export class RUMApplicationUpdateAttributes {
  /**
   * Indicates if flat sampling of Session Replay for APM-correlated RUM sessions is enabled.
   */
  "apmRumFlatSamplingReplayEnabled"?: boolean;
  /**
   * Sample rate (0-100) of Session Replay for APM-correlated RUM sessions when flat sampling is enabled.
   */
  "apmRumFlatSamplingReplaySampleRate"?: number;
  /**
   * Indicates if Error Tracking exclusion filters are enabled for the application.
   */
  "errorTrackingExclusionFilterEnabled"?: boolean;
  /**
   * Instrumentation type of the RUM application.
   */
  "instrumentationType"?: string;
  /**
   * New name of the RUM application.
   */
  "name"?: string;
  /**
   * Sample rate (0-100) of Session Replay for Product Analytics sessions.
   */
  "productAnalyticsReplaySampleRate"?: number;
  /**
   * Controls the retention policy for Product Analytics data derived from RUM events.
   * Requests also accept `PREVIEW` (the initial state of a new application, reported as `NONE` in responses). Setting `MAX` requires the `product_analytics_apps_write` permission.
   */
  "productAnalyticsRetentionState"?: RUMProductAnalyticsRetentionState;
  /**
   * ID of the RUM SDK remote configuration to associate with the application.
   */
  "remoteConfigId"?: string;
  /**
   * Configures which RUM events are processed and stored for the application. Defaults to `ALL` when creating an application.
   */
  "rumEventProcessingState"?: RUMEventProcessingState;
  /**
   * New list of tags of the RUM application, in `key:value` format. Replaces the existing tags.
   */
  "tags"?: Array<string>;
  /**
   * New type of the RUM application. Supported values are `browser`, `ios`, `android`, `react-native`, `flutter`, `roku`, `electron`, `unity`, `kotlin-multiplatform`, `react`, `nextjs`, `angular`, `vuejs`, `nuxt`, `tanstack`, `maui`, `salesforce-lwc`, `shopify`, `cpp`, `rum-cpp`, `unreal`.
   */
  "type"?: string;

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
    instrumentationType: {
      baseName: "instrumentation_type",
      type: "string",
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
      type: "RUMProductAnalyticsRetentionState",
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
      type: "string",
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
