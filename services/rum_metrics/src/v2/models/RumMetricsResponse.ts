import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumMetricResponseData } from "./RumMetricResponseData";

/**
 * All the available rum-based metric objects.
 */
export class RumMetricsResponse {
  /**
   * A list of rum-based metric objects.
   */
  "data"?: Array<RumMetricResponseData>;
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
      type: "Array<RumMetricResponseData>",
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
    return RumMetricsResponse.attributeTypeMap;
  }

  public constructor() {}
}
