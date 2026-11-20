import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMCrossProductSampling } from "./RUMCrossProductSampling";
import { RUMRetentionFilterEventType } from "./RUMRetentionFilterEventType";
import { RUMRetentionFilterTrack } from "./RUMRetentionFilterTrack";

/**
 * The object describing attributes of a RUM retention filter.
 */
export class RUMRetentionFilterAttributes {
  /**
   * The configuration for cross-product retention filters.
   */
  "crossProductSampling"?: RUMCrossProductSampling;
  /**
   * Whether the retention filter is enabled.
   */
  "enabled"?: boolean;
  /**
   * The type of RUM events to filter on.
   */
  "eventType"?: RUMRetentionFilterEventType;
  /**
   * The name of a RUM retention filter.
   */
  "name"?: string;
  /**
   * The query string for a RUM retention filter.
   */
  "query"?: string;
  /**
   * The sample rate for a RUM retention filter, between 0.1 and 100. Values are truncated to one decimal place.
   */
  "sampleRate"?: number;
  /**
   * The product whose events the retention filter applies to.
   */
  "track"?: RUMRetentionFilterTrack;
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
    crossProductSampling: {
      baseName: "cross_product_sampling",
      type: "RUMCrossProductSampling",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    eventType: {
      baseName: "event_type",
      type: "RUMRetentionFilterEventType",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    sampleRate: {
      baseName: "sample_rate",
      type: "number",
      format: "double",
    },
    track: {
      baseName: "track",
      type: "RUMRetentionFilterTrack",
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
    return RUMRetentionFilterAttributes.attributeTypeMap;
  }

  public constructor() {}
}
