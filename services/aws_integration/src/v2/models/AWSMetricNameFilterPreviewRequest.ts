import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSMetricNameFilterPreviewRequestData } from "./AWSMetricNameFilterPreviewRequestData";

/**
 * AWS metric name filter preview request body.
 */
export class AWSMetricNameFilterPreviewRequest {
  /**
   * AWS metric name filter preview request data.
   */
  "data": AWSMetricNameFilterPreviewRequestData;
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
      type: "AWSMetricNameFilterPreviewRequestData",
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
    return AWSMetricNameFilterPreviewRequest.attributeTypeMap;
  }

  public constructor() {}
}
