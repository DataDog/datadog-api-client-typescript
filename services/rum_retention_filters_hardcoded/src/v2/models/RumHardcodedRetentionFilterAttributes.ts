import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumHardcodedCrossProductSampling } from "./RumHardcodedCrossProductSampling";
import { RumHardcodedCrossProductSamplingEditability } from "./RumHardcodedCrossProductSamplingEditability";
import { RumHardcodedRetentionFilterEventType } from "./RumHardcodedRetentionFilterEventType";

/**
 * The attributes of a hardcoded retention filter.
 */
export class RumHardcodedRetentionFilterAttributes {
  /**
   * Cross-product retention settings for a hardcoded retention filter.
   */
  "crossProductSampling"?: RumHardcodedCrossProductSampling;
  /**
   * Flags indicating which `cross_product_sampling` fields can be updated. Read-only.
   */
  "crossProductSamplingEditability"?: RumHardcodedCrossProductSamplingEditability;
  /**
   * Indicates whether the hardcoded retention filter is active. Read-only.
   */
  "enabled"?: boolean;
  /**
   * The type of RUM events the hardcoded filter applies to. Read-only.
   */
  "eventType"?: RumHardcodedRetentionFilterEventType;
  /**
   * The name of the hardcoded retention filter. Read-only.
   */
  "name"?: string;
  /**
   * The query string for the hardcoded retention filter. Read-only.
   */
  "query"?: string;
  /**
   * The retention sample rate (0–100) for the hardcoded filter. Read-only.
   */
  "sampleRate"?: number;
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
      type: "RumHardcodedCrossProductSampling",
    },
    crossProductSamplingEditability: {
      baseName: "cross_product_sampling_editability",
      type: "RumHardcodedCrossProductSamplingEditability",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    eventType: {
      baseName: "event_type",
      type: "RumHardcodedRetentionFilterEventType",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RumHardcodedRetentionFilterAttributes.attributeTypeMap;
  }

  public constructor() {}
}
