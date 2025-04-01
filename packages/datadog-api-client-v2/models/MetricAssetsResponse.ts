/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricAssetResponseData } from "./MetricAssetResponseData";
import { MetricAssetResponseIncluded } from "./MetricAssetResponseIncluded";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Response object that includes related dashboards, monitors, notebooks, and SLOs.
*/
export class MetricAssetsResponse {
  /**
   * Metric assets response data.
  */
  "data"?: MetricAssetResponseData;
  /**
   * Array of objects related to the metric assets.
  */
  "included"?: Array<MetricAssetResponseIncluded>;

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
    "data": {
      "baseName": "data",
      "type": "MetricAssetResponseData",
    },
    "included": {
      "baseName": "included",
      "type": "Array<MetricAssetResponseIncluded>",
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




    return MetricAssetsResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









