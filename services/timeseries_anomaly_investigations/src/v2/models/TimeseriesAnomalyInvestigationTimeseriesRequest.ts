import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesAnomalyInvestigationFormula } from "./TimeseriesAnomalyInvestigationFormula";
import { TimeseriesAnomalyInvestigationMetricQuery } from "./TimeseriesAnomalyInvestigationMetricQuery";

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
