import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricAssetResponseRelationships } from "./MetricAssetResponseRelationships";
import { MetricType } from "./MetricType";

/**
 * Metric assets response data.
 */
export class MetricAssetResponseData {
  /**
   * The metric name for this resource.
   */
  "id": string;
  /**
   * Relationships to assets related to the metric.
   */
  "relationships"?: MetricAssetResponseRelationships;
  /**
   * The metric resource type.
   */
  "type": MetricType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "MetricAssetResponseRelationships",
    },
    type: {
      baseName: "type",
      type: "MetricType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricAssetResponseData.attributeTypeMap;
  }

  public constructor() {}
}
