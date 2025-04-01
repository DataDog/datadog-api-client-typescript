/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricAssetResponseRelationships } from "./MetricAssetResponseRelationships";
import { MetricType } from "./MetricType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Metric assets response data.
*/
export class MetricAssetResponseData {
  /**
   * The metric name for this resource.
  */
  "id": string;
  /**
   * Relationships to assets related to the metric.
  */
  "relationships"?: MetricAssetResponseRelationships;
  /**
   * The metric resource type.
  */
  "type": MetricType;

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
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "relationships": {
      "baseName": "relationships",
      "type": "MetricAssetResponseRelationships",
    },
    "type": {
      "baseName": "type",
      "type": "MetricType",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return MetricAssetResponseData.attributeTypeMap;

  }

  public constructor() {











  }
}









