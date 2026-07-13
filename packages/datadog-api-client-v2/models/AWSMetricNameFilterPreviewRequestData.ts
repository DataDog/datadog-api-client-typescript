/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSMetricNameFilterPreviewRequestAttributes } from "./AWSMetricNameFilterPreviewRequestAttributes";
import { AWSMetricNameFilterPreviewType } from "./AWSMetricNameFilterPreviewType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS metric name filter preview request data.
 */
export class AWSMetricNameFilterPreviewRequestData {
  /**
   * AWS metric name filter preview request attributes.
   */
  "attributes": AWSMetricNameFilterPreviewRequestAttributes;
  /**
   * The `AWSMetricNameFilterPreviewResponseData` `type`.
   */
  "type": AWSMetricNameFilterPreviewType;

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
    attributes: {
      baseName: "attributes",
      type: "AWSMetricNameFilterPreviewRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSMetricNameFilterPreviewType",
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
    return AWSMetricNameFilterPreviewRequestData.attributeTypeMap;
  }

  public constructor() {}
}
