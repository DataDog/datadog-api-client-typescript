import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesAnomalyInvestigationMetaType } from "./TimeseriesAnomalyInvestigationMetaType";
import { TimeseriesAnomalyInvestigationQueryStatus } from "./TimeseriesAnomalyInvestigationQueryStatus";
import { TimeseriesAnomalyInvestigationResultsWarning } from "./TimeseriesAnomalyInvestigationResultsWarning";

/**
 * Timeseries execution metadata for the single request accepted by this API version.
 */
export class TimeseriesAnomalyInvestigationResponseMeta {
  /**
   * Effective start of the timeseries query in milliseconds since the Unix epoch.
   */
  "fromDate": number;
  /**
   * Effective timeseries interval in milliseconds.
   */
  "interval": number;
  /**
   * Execution status for the request's queries.
   */
  "queries": Array<TimeseriesAnomalyInvestigationQueryStatus>;
  /**
   * Response metadata type for a timeseries anomaly investigation.
   */
  "resType": TimeseriesAnomalyInvestigationMetaType;
  /**
   * Non-fatal warnings produced while executing the investigation.
   */
  "resultsWarnings": Array<TimeseriesAnomalyInvestigationResultsWarning>;
  /**
   * Effective end of the timeseries query in milliseconds since the Unix epoch.
   */
  "toDate": number;
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
    fromDate: {
      baseName: "from_date",
      type: "number",
      required: true,
      format: "int64",
    },
    interval: {
      baseName: "interval",
      type: "number",
      required: true,
      format: "int64",
    },
    queries: {
      baseName: "queries",
      type: "Array<TimeseriesAnomalyInvestigationQueryStatus>",
      required: true,
    },
    resType: {
      baseName: "res_type",
      type: "TimeseriesAnomalyInvestigationMetaType",
      required: true,
    },
    resultsWarnings: {
      baseName: "results_warnings",
      type: "Array<TimeseriesAnomalyInvestigationResultsWarning>",
      required: true,
    },
    toDate: {
      baseName: "to_date",
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
    return TimeseriesAnomalyInvestigationResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
