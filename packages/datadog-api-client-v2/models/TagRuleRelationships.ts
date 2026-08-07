/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagRuleScoreRelationship } from "./TagRuleScoreRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Related resources for a tag rule. Only present when the corresponding `include` query parameter is supplied.
 */
export class TagRuleRelationships {
  /**
   * A relationship to the compliance score resource for this rule.
   */
  "score"?: TagRuleScoreRelationship;

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
    score: {
      baseName: "score",
      type: "TagRuleScoreRelationship",
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
    return TagRuleRelationships.attributeTypeMap;
  }

  public constructor() {}
}
