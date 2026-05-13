/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostAnomaliesResponseDataAttributes } from "./CostAnomaliesResponseDataAttributes";
import { CostAnomaliesResponseDataType } from "./CostAnomaliesResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Resource wrapper for the list of cost anomalies and aggregated totals.
 */
export class CostAnomaliesResponseData {
  /**
   * Cost anomaly results and aggregated totals for the queried window.
   */
  "attributes": CostAnomaliesResponseDataAttributes;
  /**
   * Static identifier of the cost anomalies collection resource.
   */
  "id": string;
  /**
   * Type of the cost anomalies collection resource. Must be `anomalies`.
   */
  "type": CostAnomaliesResponseDataType;

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
      type: "CostAnomaliesResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostAnomaliesResponseDataType",
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
    return CostAnomaliesResponseData.attributeTypeMap;
  }

  public constructor() {}
}
