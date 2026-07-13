/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSMetricNameFilterPreviewDDName } from "./AWSMetricNameFilterPreviewDDName";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
