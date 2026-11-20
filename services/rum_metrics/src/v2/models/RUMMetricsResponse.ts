import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMMetricResponseData } from "./RUMMetricResponseData";

/**
 * All the available RUM-based metric objects.
 */
export class RUMMetricsResponse {
  /**
   * A list of RUM-based metric objects.
   */
  "data"?: Array<RUMMetricResponseData>;
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
      type: "Array<RUMMetricResponseData>",
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
    return RUMMetricsResponse.attributeTypeMap;
  }

  public constructor() {}
}
