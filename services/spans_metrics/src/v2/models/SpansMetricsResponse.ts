import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpansMetricResponseData } from "./SpansMetricResponseData";

/**
 * All the available span-based metric objects.
 */
export class SpansMetricsResponse {
  /**
   * A list of span-based metric objects.
   */
  "data"?: Array<SpansMetricResponseData>;
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
      type: "Array<SpansMetricResponseData>",
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
    return SpansMetricsResponse.attributeTypeMap;
  }

  public constructor() {}
}
