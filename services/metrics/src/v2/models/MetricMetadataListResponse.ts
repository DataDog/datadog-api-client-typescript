import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricMetadataData } from "./MetricMetadataData";

/**
 * Metadata for each requested metric that exists, in request order.
 */
export class MetricMetadataListResponse {
  /**
   * One item per requested metric that exists. Metrics that don't exist are left out.
   */
  "data": Array<MetricMetadataData>;
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
      type: "Array<MetricMetadataData>",
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
    return MetricMetadataListResponse.attributeTypeMap;
  }

  public constructor() {}
}
