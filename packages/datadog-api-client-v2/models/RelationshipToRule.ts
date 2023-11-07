/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToRuleData } from "./RelationshipToRuleData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Scorecard create rule response relationship.
 */
export class RelationshipToRule {
  /**
   * Relationship data for a rule.
   */
  "scorecard"?: RelationshipToRuleData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    scorecard: {
      baseName: "scorecard",
      type: "RelationshipToRuleData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToRule.attributeTypeMap;
  }

  public constructor() {}
}
