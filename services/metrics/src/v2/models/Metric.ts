import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricType } from "./MetricType";

/**
 * Object for a single metric tag configuration.
 */
export class Metric {
  /**
   * The metric name for this resource.
   */
  "id"?: string;
  /**
   * The metric resource type.
   */
  "type"?: MetricType;
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
    },
    type: {
      baseName: "type",
      type: "MetricType",
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
    return Metric.attributeTypeMap;
  }

  public constructor() {}
}
