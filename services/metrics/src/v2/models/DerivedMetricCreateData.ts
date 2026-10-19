import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DerivedMetricAttributes } from "./DerivedMetricAttributes";
import { DerivedMetricsType } from "./DerivedMetricsType";

/**
 * Data object for creating or updating a derived metric.
 */
export class DerivedMetricCreateData {
  /**
   * Attributes of a derived metric.
   */
  "attributes": DerivedMetricAttributes;
  /**
   * The derived metric name used as the resource ID.
   */
  "id": string;
  /**
   * The derived metric resource type.
   */
  "type": DerivedMetricsType;
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
      type: "DerivedMetricAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DerivedMetricsType",
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
    return DerivedMetricCreateData.attributeTypeMap;
  }

  public constructor() {}
}
