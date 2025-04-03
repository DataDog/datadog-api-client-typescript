import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpansMetricResponseAttributes } from "./SpansMetricResponseAttributes";
import { SpansMetricType } from "./SpansMetricType";

/**
 * The span-based metric properties.
 */
export class SpansMetricResponseData {
  /**
   * The object describing a Datadog span-based metric.
   */
  "attributes"?: SpansMetricResponseAttributes;
  /**
   * The name of the span-based metric.
   */
  "id"?: string;
  /**
   * The type of resource. The value should always be spans_metrics.
   */
  "type"?: SpansMetricType;
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
      type: "SpansMetricResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SpansMetricType",
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
    return SpansMetricResponseData.attributeTypeMap;
  }

  public constructor() {}
}
