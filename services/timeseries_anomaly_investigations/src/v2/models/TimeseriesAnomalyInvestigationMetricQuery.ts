import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesAnomalyInvestigationDataSource } from "./TimeseriesAnomalyInvestigationDataSource";

/**
 * Metrics query referenced by a formula.
 */
export class TimeseriesAnomalyInvestigationMetricQuery {
  /**
   * Optional scalar aggregator accepted for request compatibility. This field is ignored for timeseries queries.
   */
  "aggregator"?: string;
  /**
   * Optional organization UUID used for a cross-organization query. Each query accepts at most one UUID; use separate queries for separate organizations. Influential-tag analysis is currently unsupported for cross-organization queries, but anomaly detection still runs.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Data source for an anomaly investigation query.
   */
  "dataSource": TimeseriesAnomalyInvestigationDataSource;
  /**
   * Name used to reference this query from formulas.
   */
  "name": string;
  /**
   * Datadog metrics query expression.
   */
  "query": string;
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
    aggregator: {
      baseName: "aggregator",
      type: "string",
    },
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "TimeseriesAnomalyInvestigationDataSource",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
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
    return TimeseriesAnomalyInvestigationMetricQuery.attributeTypeMap;
  }

  public constructor() {}
}
