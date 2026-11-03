/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesAnomalyInvestigationFormula } from "./TimeseriesAnomalyInvestigationFormula";
import { TimeseriesAnomalyInvestigationMetricQuery } from "./TimeseriesAnomalyInvestigationMetricQuery";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metrics timeseries request to investigate.
 */
export class TimeseriesAnomalyInvestigationTimeseriesRequest {
  /**
   * Formulas to evaluate. Each formula may contain an explicit `anomalies()` call or a supported metrics expression.
   */
  "formulas": Array<TimeseriesAnomalyInvestigationFormula>;
  /**
   * Start of the investigation time window in milliseconds since the Unix epoch.
   */
  "from": number;
  /**
   * Optional requested aggregation interval in milliseconds.
   */
  "interval"?: number;
  /**
   * Metrics queries referenced by the formulas.
   */
  "queries": Array<TimeseriesAnomalyInvestigationMetricQuery>;
  /**
   * End of the investigation time window in milliseconds since the Unix epoch. Must be later than `from`.
   */
  "to": number;

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
    formulas: {
      baseName: "formulas",
      type: "Array<TimeseriesAnomalyInvestigationFormula>",
      required: true,
    },
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "int64",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
    queries: {
      baseName: "queries",
      type: "Array<TimeseriesAnomalyInvestigationMetricQuery>",
      required: true,
    },
    to: {
      baseName: "to",
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
    return TimeseriesAnomalyInvestigationTimeseriesRequest.attributeTypeMap;
  }

  public constructor() {}
}
