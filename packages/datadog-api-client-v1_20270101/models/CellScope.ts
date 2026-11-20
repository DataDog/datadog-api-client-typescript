/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CellScope20270101CohortTarget } from "./CellScope20270101CohortTarget";
import { CellScopeReturnPeriodTarget } from "./CellScopeReturnPeriodTarget";
import { CellScopeType } from "./CellScopeType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
