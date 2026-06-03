import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumMetricResponseData } from "./RumMetricResponseData";

/**
 * The rum-based metric object.
 */
export class RumMetricResponse {
  /**
   * The rum-based metric properties.
   */
  "data"?: RumMetricResponseData;
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
      type: "RumMetricResponseData",
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
    return RumMetricResponse.attributeTypeMap;
  }

  public constructor() {}
}
