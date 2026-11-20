import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CellScope20270101CohortTarget } from "./CellScope20270101CohortTarget";
import { CellScopeReturnPeriodTarget } from "./CellScopeReturnPeriodTarget";
import { CellScopeType } from "./CellScopeType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CellScope {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "cohortTarget": CellScope20270101CohortTarget;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "returnPeriodTarget": CellScopeReturnPeriodTarget;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": CellScopeType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cohortTarget: {
      baseName: "cohort_target",
      type: "CellScope20270101CohortTarget",
      required: true,
    },
    returnPeriodTarget: {
      baseName: "return_period_target",
      type: "CellScopeReturnPeriodTarget",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CellScopeType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CellScope.attributeTypeMap;
  }

  public constructor() {}
}
