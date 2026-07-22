/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSMetricNameFilterPreviewFilterMatch } from "./AWSMetricNameFilterPreviewFilterMatch";
import { AWSMetricNameFilterPreviewMetric } from "./AWSMetricNameFilterPreviewMetric";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The metric name filter preview for a single namespace.
*/
export class AWSMetricNameFilterPreviewNamespace {
  /**
   * The metric name filter patterns evaluated for this namespace and how many metrics they matched.
  */
  "filters": Array<AWSMetricNameFilterPreviewFilterMatch>;
  /**
   * The CloudWatch metrics collected for this namespace and whether each resulting
   * Datadog metric is filtered.
  */
  "metrics": Array<AWSMetricNameFilterPreviewMetric>;
  /**
   * The AWS CloudWatch namespace.
  */
  "namespace": string;

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
    "filters": {
      "baseName": "filters",
      "type": "Array<AWSMetricNameFilterPreviewFilterMatch>",
      "required": true,
    },
    "metrics": {
      "baseName": "metrics",
      "type": "Array<AWSMetricNameFilterPreviewMetric>",
      "required": true,
    },
    "namespace": {
      "baseName": "namespace",
      "type": "string",
      "required": true,
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




    return AWSMetricNameFilterPreviewNamespace.attributeTypeMap;

  }

  public constructor() {











  }
}









