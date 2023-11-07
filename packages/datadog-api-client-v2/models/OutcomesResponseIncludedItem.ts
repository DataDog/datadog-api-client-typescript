/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OutcomesResponseIncludedRuleAttributes } from "./OutcomesResponseIncludedRuleAttributes";
import { RuleType } from "./RuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the included rule.
 */
export class OutcomesResponseIncludedItem {
  /**
   * Details of a rule.
   */
  "attributes"?: OutcomesResponseIncludedRuleAttributes;
  /**
   * The unique ID for a scorecard rule.
   */
  "id"?: string;
  /**
   * The JSON:API type for scorecard rules.
   */
  "type"?: RuleType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "OutcomesResponseIncludedRuleAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RuleType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OutcomesResponseIncludedItem.attributeTypeMap;
  }

  public constructor() {}
}
