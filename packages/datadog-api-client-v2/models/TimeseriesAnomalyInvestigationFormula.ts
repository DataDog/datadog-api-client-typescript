/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesAnomalyInvestigationFormulaLimit } from "./TimeseriesAnomalyInvestigationFormulaLimit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Formula evaluated by the timeseries request.
 */
export class TimeseriesAnomalyInvestigationFormula {
  /**
   * Formula expression referencing one or more named queries.
   */
  "formula": string;
  /**
   * Optional formula limit accepted for compatibility with Timeseries API requests. Formula limits have no effect on timeseries queries.
   */
  "limit"?: TimeseriesAnomalyInvestigationFormulaLimit;

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
    formula: {
      baseName: "formula",
      type: "string",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "TimeseriesAnomalyInvestigationFormulaLimit",
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
    return TimeseriesAnomalyInvestigationFormula.attributeTypeMap;
  }

  public constructor() {}
}
