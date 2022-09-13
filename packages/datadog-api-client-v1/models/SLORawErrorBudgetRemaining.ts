/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Error budget remaining for an SLO.
 */
export class SLORawErrorBudgetRemaining {
  /**
   * Error budget remaining unit.
   */
  "unit"?: string;
  /**
   * Error budget remaining value.
   */
  "value"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    unit: {
      baseName: "unit",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "number",
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLORawErrorBudgetRemaining.attributeTypeMap;
  }

  public constructor() {}
}
