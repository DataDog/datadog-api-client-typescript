import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumMetricCreateAttributes } from "./RumMetricCreateAttributes";
import { RumMetricType } from "./RumMetricType";

/**
 * The new rum-based metric properties.
 */
export class RumMetricCreateData {
  /**
   * The object describing the Datadog rum-based metric to create.
   */
  "attributes": RumMetricCreateAttributes;
  /**
   * The name of the rum-based metric.
   */
  "id": string;
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
      type: "RumMetricCreateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumMetricType",
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
    return RumMetricCreateData.attributeTypeMap;
  }

  public constructor() {}
}
