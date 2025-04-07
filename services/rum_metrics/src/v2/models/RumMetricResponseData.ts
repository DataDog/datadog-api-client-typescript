import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumMetricResponseAttributes } from "./RumMetricResponseAttributes";
import { RumMetricType } from "./RumMetricType";

/**
 * The rum-based metric properties.
 */
export class RumMetricResponseData {
  /**
   * The object describing a Datadog rum-based metric.
   */
  "attributes"?: RumMetricResponseAttributes;
  /**
   * The name of the rum-based metric.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be rum_metrics.
   */
  "type"?: RumMetricType;
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
      type: "RumMetricResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RumMetricType",
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
    return RumMetricResponseData.attributeTypeMap;
  }

  public constructor() {}
}
