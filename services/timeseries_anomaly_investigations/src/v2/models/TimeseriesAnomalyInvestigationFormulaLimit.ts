import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesAnomalyInvestigationFormulaLimitOrder } from "./TimeseriesAnomalyInvestigationFormulaLimitOrder";

/**
 * Optional formula limit accepted for compatibility with Timeseries API requests. Formula limits have no effect on timeseries queries.
 */
export class TimeseriesAnomalyInvestigationFormulaLimit {
  /**
   * Requested result limit. This field has no effect on a timeseries anomaly investigation.
   */
  "count"?: number;
  /**
   * Sort order used when applying a formula series limit.
   */
  "order"?: TimeseriesAnomalyInvestigationFormulaLimitOrder;
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
    count: {
      baseName: "count",
      type: "number",
      format: "int64",
    },
    order: {
      baseName: "order",
      type: "TimeseriesAnomalyInvestigationFormulaLimitOrder",
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
    return TimeseriesAnomalyInvestigationFormulaLimit.attributeTypeMap;
  }

  public constructor() {}
}
