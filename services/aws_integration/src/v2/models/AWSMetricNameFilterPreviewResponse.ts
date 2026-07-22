import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSMetricNameFilterPreviewResponseData } from "./AWSMetricNameFilterPreviewResponseData";

/**
 * AWS metric name filter preview response body.
 */
export class AWSMetricNameFilterPreviewResponse {
  /**
   * AWS metric name filter preview response data.
   */
  "data": AWSMetricNameFilterPreviewResponseData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "AWSMetricNameFilterPreviewResponseData",
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
    return AWSMetricNameFilterPreviewResponse.attributeTypeMap;
  }

  public constructor() {}
}
