/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostAnomaliesResponseData } from "./CostAnomaliesResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object containing a list of detected Cloud Cost Management anomalies and aggregated totals.
 */
export class CostAnomaliesResponse {
  /**
   * Resource wrapper for the list of cost anomalies and aggregated totals.
   */
  "data"?: CostAnomaliesResponseData;

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
      type: "CostAnomaliesResponseData",
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
    return CostAnomaliesResponse.attributeTypeMap;
  }

  public constructor() {}
}
