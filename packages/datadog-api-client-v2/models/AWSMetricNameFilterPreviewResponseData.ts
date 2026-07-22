/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSMetricNameFilterPreviewResponseAttributes } from "./AWSMetricNameFilterPreviewResponseAttributes";
import { AWSMetricNameFilterPreviewType } from "./AWSMetricNameFilterPreviewType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * AWS metric name filter preview response data.
*/
export class AWSMetricNameFilterPreviewResponseData {
  /**
   * AWS metric name filter preview response attributes.
  */
  "attributes": AWSMetricNameFilterPreviewResponseAttributes;
  /**
   * Unique Datadog ID of the AWS Account Integration Config.
   * To get the config ID for an account, use the
   * [List all AWS integrations](https://docs.datadoghq.com/api/latest/aws-integration/#list-all-aws-integrations)
   * endpoint and query by AWS Account ID.
  */
  "id": string;
  /**
   * The `AWSMetricNameFilterPreviewResponseData` `type`.
  */
  "type": AWSMetricNameFilterPreviewType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "AWSMetricNameFilterPreviewResponseAttributes",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "AWSMetricNameFilterPreviewType",
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




    return AWSMetricNameFilterPreviewResponseData.attributeTypeMap;

  }

  public constructor() {











  }
}









