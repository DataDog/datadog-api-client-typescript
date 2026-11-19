import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricMetadataAttributes } from "./MetricMetadataAttributes";
import { MetricMetadataType } from "./MetricMetadataType";

/**
 * Metadata for one requested metric.
 */
export class MetricMetadataData {
  /**
   * Metadata for one metric. Every attribute is always present. A value that is unknown or not set is `null`.
   */
  "attributes": MetricMetadataAttributes;
  /**
   * The metric name.
   */
  "id": string;
  /**
   * The metric metadata resource type.
   */
  "type": MetricMetadataType;
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
    attributes: {
      baseName: "attributes",
      type: "MetricMetadataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricMetadataType",
      required: true,
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
    return MetricMetadataData.attributeTypeMap;
  }

  public constructor() {}
}
