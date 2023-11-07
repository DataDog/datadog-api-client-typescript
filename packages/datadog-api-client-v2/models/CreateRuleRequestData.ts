/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RuleAttributes } from "./RuleAttributes";
import { RuleType } from "./RuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Scorecard create rule request data.
 */
export class CreateRuleRequestData {
  /**
   * Details of a rule.
   */
  "attributes"?: RuleAttributes;
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
      type: "RuleAttributes",
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
    return CreateRuleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
