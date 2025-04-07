import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumMetricType } from "./RumMetricType";
import { RumMetricUpdateAttributes } from "./RumMetricUpdateAttributes";

/**
 * The new rum-based metric properties.
 */
export class RumMetricUpdateData {
  /**
   * The rum-based metric properties that will be updated.
   */
  "attributes": RumMetricUpdateAttributes;
  /**
   * The name of the rum-based metric.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be rum_metrics.
   */
  "type": RumMetricType;
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
      type: "RumMetricUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RumMetricType",
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
    return RumMetricUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
