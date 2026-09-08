/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesAnomalyInvestigationFormulaLimitOrder } from "./TimeseriesAnomalyInvestigationFormulaLimitOrder";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
