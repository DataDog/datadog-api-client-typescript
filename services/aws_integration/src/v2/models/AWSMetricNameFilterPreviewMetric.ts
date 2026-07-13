import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSMetricNameFilterPreviewDDName } from "./AWSMetricNameFilterPreviewDDName";

/**
 * A CloudWatch metric and the Datadog metric names it produces.
 */
export class AWSMetricNameFilterPreviewMetric {
  /**
   * The CloudWatch metric name.
   */
  "cwName": string;
  /**
   * The Datadog metric names produced from this CloudWatch metric.
   */
  "ddNames": Array<AWSMetricNameFilterPreviewDDName>;
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
    cwName: {
      baseName: "cw_name",
      type: "string",
      required: true,
    },
    ddNames: {
      baseName: "dd_names",
      type: "Array<AWSMetricNameFilterPreviewDDName>",
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
    return AWSMetricNameFilterPreviewMetric.attributeTypeMap;
  }

  public constructor() {}
}
