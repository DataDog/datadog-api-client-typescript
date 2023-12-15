/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details of a rule.
 */
export class OutcomesResponseIncludedRuleAttributes {
  /**
   * Name of the rule.
   */
  "name"?: string;
  /**
   * The scorecard name to which this rule must belong.
   */
  "scorecardName"?: string;

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
    },
    scorecardName: {
      baseName: "scorecard_name",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OutcomesResponseIncludedRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
