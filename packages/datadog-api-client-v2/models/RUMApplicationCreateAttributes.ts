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
 */
export class RUMApplicationCreateAttributes {
  /**
   * Whether to create the default retention filters when the application is created: `Sessions with errors` and `Sessions`, each with a 100% retention rate.
   * Set to `false` to create the application without them, for example when you add your own retention filters right after creating it. Until you add retention filters, the application only retains sessions matched by its [permanent retention filters](https://docs.datadoghq.com/real_user_monitoring/rum_without_limits/retention_filters/#permanent-retention-filters).
   * This setting doesn't affect permanent retention filters (sessions with forced replays, Synthetics sessions and RUM-APM flat sampling).
   */
  "createDefaultRetentionFilters"?: boolean;
  /**
   * Name of the RUM application.
   */
  "name": string;
  /**
   * Controls the retention policy for Product Analytics data derived from RUM events.
   */
  "productAnalyticsRetentionState"?: RUMProductAnalyticsRetentionState;
  /**
   * Configures which RUM events are processed and stored for the application.
   */
  "rumEventProcessingState"?: RUMEventProcessingState;
  /**
   * Type of the RUM application. Supported values are `browser`, `ios`, `android`, `react-native`, `flutter`, `roku`, `electron`, `unity`, `kotlin-multiplatform`.
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
    createDefaultRetentionFilters: {
      baseName: "create_default_retention_filters",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    productAnalyticsRetentionState: {
      baseName: "product_analytics_retention_state",
      type: "RUMProductAnalyticsRetentionState",
    },
    rumEventProcessingState: {
      baseName: "rum_event_processing_state",
      type: "RUMEventProcessingState",
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
