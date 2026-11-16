/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Monitor configuration options for data jobs queries.
 */
export class MonitorFormulaAndFunctionDataJobsMonitorOptions {
  /**
   * Alert separately for each failed run instead of on the count of trailing failures.
   * Only supported for `failed_runs` monitors with the `aastra` query dialect. It requires
   * a `> 0` threshold with no warning threshold, an evaluation window of at most two days,
   * and renotification disabled.
   */
  "alertOnEveryFailure"?: boolean;

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
    alertOnEveryFailure: {
      baseName: "alert_on_every_failure",
      type: "boolean",
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
    return MonitorFormulaAndFunctionDataJobsMonitorOptions.attributeTypeMap;
  }

  public constructor() {}
}
