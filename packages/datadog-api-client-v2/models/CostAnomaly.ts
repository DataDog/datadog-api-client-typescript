/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostAnomalyDismissal } from "./CostAnomalyDismissal";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single detected Cloud Cost Management anomaly.
 */
export class CostAnomaly {
  /**
   * Actual cost incurred during the anomaly window.
   */
  "actualCost": number;
  /**
   * Anomalous cost change relative to the expected baseline.
   */
  "anomalousCostChange": number;
  /**
   * Anomaly end timestamp in Unix milliseconds.
   */
  "anomalyEnd": number;
  /**
   * Anomaly start timestamp in Unix milliseconds.
   */
  "anomalyStart": number;
  /**
   * Map of correlated tag keys to the list of correlated tag values.
   */
  "correlatedTags": { [key: string]: Array<string> } | null;
  /**
   * Map of cost dimension keys to their values for the anomaly grouping.
   */
  "dimensions": { [key: string]: string };
  /**
   * Resolution metadata for an anomaly that has been dismissed.
   */
  "dismissal"?: CostAnomalyDismissal;
  /**
   * Maximum cost observed during the anomaly window.
   */
  "maxCost": number;
  /**
   * Cloud or SaaS provider associated with the anomaly (for example `aws`, `gcp`, `azure`).
   */
  "provider": string;
  /**
   * The metrics query that detected the anomaly.
   */
  "query": string;
  /**
   * The unique identifier of the anomaly.
   */
  "uuid": string;

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
    actualCost: {
      baseName: "actual_cost",
      type: "number",
      required: true,
      format: "double",
    },
    anomalousCostChange: {
      baseName: "anomalous_cost_change",
      type: "number",
      required: true,
      format: "double",
    },
    anomalyEnd: {
      baseName: "anomaly_end",
      type: "number",
      required: true,
      format: "int64",
    },
    anomalyStart: {
      baseName: "anomaly_start",
      type: "number",
      required: true,
      format: "int64",
    },
    correlatedTags: {
      baseName: "correlated_tags",
      type: "{ [key: string]: Array<string>; }",
      required: true,
    },
    dimensions: {
      baseName: "dimensions",
      type: "{ [key: string]: string; }",
      required: true,
    },
    dismissal: {
      baseName: "dismissal",
      type: "CostAnomalyDismissal",
    },
    maxCost: {
      baseName: "max_cost",
      type: "number",
      required: true,
      format: "double",
    },
    provider: {
      baseName: "provider",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    uuid: {
      baseName: "uuid",
      type: "string",
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
    return CostAnomaly.attributeTypeMap;
  }

  public constructor() {}
}
