import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMMetricResponseData } from "./RUMMetricResponseData";

/**
 * The RUM-based metric object.
 */
export class RUMMetricResponse {
  /**
   * The RUM-based metric properties.
   */
  "data"?: RUMMetricResponseData;
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
      type: "RUMMetricResponseData",
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
    return RUMMetricResponse.attributeTypeMap;
  }

  public constructor() {}
}
