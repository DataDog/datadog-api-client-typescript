import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMEventProcessingState } from "./RUMEventProcessingState";
import { RUMProductAnalyticsRetentionState } from "./RUMProductAnalyticsRetentionState";

/**
 * RUM application creation attributes.
 */
export class RUMApplicationCreateAttributes {
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
