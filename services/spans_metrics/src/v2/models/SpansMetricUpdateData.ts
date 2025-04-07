import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpansMetricType } from "./SpansMetricType";
import { SpansMetricUpdateAttributes } from "./SpansMetricUpdateAttributes";

/**
 * The new span-based metric properties.
 */
export class SpansMetricUpdateData {
  /**
   * The span-based metric properties that will be updated.
   */
  "attributes": SpansMetricUpdateAttributes;
  /**
   * The type of resource. The value should always be spans_metrics.
   */
  "type": SpansMetricType;
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
      type: "SpansMetricUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SpansMetricType",
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
    return SpansMetricUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
