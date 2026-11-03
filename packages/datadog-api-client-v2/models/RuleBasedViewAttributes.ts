/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RuleBasedViewRule } from "./RuleBasedViewRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the rule-based view.
 */
export class RuleBasedViewAttributes {
  /**
   * Total number of rules in the view.
   */
  "count": number;
  /**
   * List of rules in the rule-based view.
   */
  "rules": Array<RuleBasedViewRule>;

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
      required: true,
      format: "int64",
    },
    rules: {
      baseName: "rules",
      type: "Array<RuleBasedViewRule>",
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
    return RuleBasedViewAttributes.attributeTypeMap;
  }

  public constructor() {}
}
