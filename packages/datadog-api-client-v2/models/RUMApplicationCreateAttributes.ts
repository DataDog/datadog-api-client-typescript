/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMEventProcessingState } from "./RUMEventProcessingState";
import { RUMProductAnalyticsRetentionState } from "./RUMProductAnalyticsRetentionState";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * RUM application creation attributes.
 * When `rum_event_processing_state` is omitted, it defaults to `ALL`. When `product_analytics_retention_state` is omitted, Product Analytics is not enabled. Setting it to `MAX` requires the `product_analytics_apps_write` permission.
 */
export class RUMApplicationCreateAttributes {
  /**
   * Indicates if flat sampling of Session Replay for APM-correlated RUM sessions is enabled. Defaults to `true`.
   */
  "apmRumFlatSamplingReplayEnabled"?: boolean;
  /**
   * Sample rate (0-100) of Session Replay for APM-correlated RUM sessions when flat sampling is enabled. Defaults to `1`.
   */
  "apmRumFlatSamplingReplaySampleRate"?: number;
  /**
   * Whether to create the default retention filters when the application is created: `Sessions with errors` and `Sessions`, each with a 100% retention rate.
   * Set to `false` to create the application without them, for example when you add your own retention filters right after creating it. Until you add retention filters, the application only retains sessions matched by its [permanent retention filters](https://docs.datadoghq.com/real_user_monitoring/rum_without_limits/retention_filters/#permanent-retention-filters).
   * This setting doesn't affect permanent retention filters (sessions with forced replays, Synthetics sessions and RUM-APM flat sampling).
   */
  "createDefaultRetentionFilters"?: boolean;
  /**
   * Indicates if Error Tracking exclusion filters are enabled for the application. Defaults to `false`.
   */
  "errorTrackingExclusionFilterEnabled"?: boolean;
  /**
   * Name of the RUM application. Between 1 and 255 characters.
   */
  "name": string;
  /**
   * Sample rate (0-100) of Session Replay for Product Analytics sessions. Defaults to `100`.
   */
  "productAnalyticsReplaySampleRate"?: number;
  /**
   * Controls the retention policy for Product Analytics data derived from RUM events.
   * Requests also accept `PREVIEW` (the initial state of a new application, reported as `NONE` in responses). Setting `MAX` requires the `product_analytics_apps_write` permission.
   */
  "productAnalyticsRetentionState"?: RUMProductAnalyticsRetentionState;
  /**
   * Configures which RUM events are processed and stored for the application. Defaults to `ALL` when creating an application.
   */
  "rumEventProcessingState"?: RUMEventProcessingState;
  /**
   * List of tags to associate with the RUM application, in `key:value` format.
   */
  "tags"?: Array<string>;
  /**
   * Type of the RUM application. Defaults to `browser`. Supported values are `browser`, `ios`, `android`, `react-native`, `flutter`, `roku`, `electron`, `unity`, `kotlin-multiplatform`, `react`, `nextjs`, `angular`, `vuejs`, `nuxt`, `tanstack`, `maui`, `salesforce-lwc`, `shopify`, `cpp`, `rum-cpp`, `unreal`.
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
    createDefaultRetentionFilters: {
      baseName: "create_default_retention_filters",
      type: "boolean",
    },
    errorTrackingExclusionFilterEnabled: {
      baseName: "error_tracking_exclusion_filter_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
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
    return RUMApplicationCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
