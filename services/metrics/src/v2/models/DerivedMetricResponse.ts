import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DerivedMetricData } from "./DerivedMetricData";

/**
 * Response containing a single derived metric.
 */
export class DerivedMetricResponse {
  /**
   * A derived metric resource object.
   */
  "data": DerivedMetricData;
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
    data: {
      baseName: "data",
      type: "DerivedMetricData",
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
    return DerivedMetricResponse.attributeTypeMap;
  }

  public constructor() {}
}
