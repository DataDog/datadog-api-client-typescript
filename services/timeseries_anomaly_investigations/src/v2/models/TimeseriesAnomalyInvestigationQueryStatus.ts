import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesAnomalyInvestigationQueryExecutionStatus } from "./TimeseriesAnomalyInvestigationQueryExecutionStatus";

/**
 * Execution status for one named query.
 */
export class TimeseriesAnomalyInvestigationQueryStatus {
  /**
   * Query name from the request.
   */
  "name": string;
  /**
   * Current execution status for a named query.
   */
  "status": TimeseriesAnomalyInvestigationQueryExecutionStatus;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "TimeseriesAnomalyInvestigationQueryExecutionStatus",
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
    return TimeseriesAnomalyInvestigationQueryStatus.attributeTypeMap;
  }

  public constructor() {}
}
