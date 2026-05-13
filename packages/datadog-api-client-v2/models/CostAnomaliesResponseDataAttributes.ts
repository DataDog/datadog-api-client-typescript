/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostAnomaly } from "./CostAnomaly";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Cost anomaly results and aggregated totals for the queried window.
 */
export class CostAnomaliesResponseDataAttributes {
  /**
   * The list of cost anomalies that match the request.
   */
  "anomalies": Array<CostAnomaly>;
  /**
   * Average daily anomalous cost change across the queried window.
   */
  "avgDailyAnomalousCost": number;
  /**
   * Total actual cost spent across the queried window for the matching providers.
   */
  "totalActualCost": number;
  /**
   * Sum of the anomalous cost change across all returned anomalies.
   */
  "totalAnomalousCost": number;
  /**
   * Total number of anomalies that match the request.
   */
  "totalCount": number;

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
    anomalies: {
      baseName: "anomalies",
      type: "Array<CostAnomaly>",
      required: true,
    },
    avgDailyAnomalousCost: {
      baseName: "avg_daily_anomalous_cost",
      type: "number",
      required: true,
      format: "double",
    },
    totalActualCost: {
      baseName: "total_actual_cost",
      type: "number",
      required: true,
      format: "double",
    },
    totalAnomalousCost: {
      baseName: "total_anomalous_cost",
      type: "number",
      required: true,
      format: "double",
    },
    totalCount: {
      baseName: "total_count",
      type: "number",
      required: true,
      format: "int64",
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
    return CostAnomaliesResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
