/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostAnomalyResponseData } from "./CostAnomalyResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object containing a single Cloud Cost Management anomaly.
 */
export class CostAnomalyResponse {
  /**
   * Resource wrapper for a single cost anomaly.
   */
  "data"?: CostAnomalyResponseData;

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
      type: "CostAnomalyResponseData",
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
    return CostAnomalyResponse.attributeTypeMap;
  }

  public constructor() {}
}
