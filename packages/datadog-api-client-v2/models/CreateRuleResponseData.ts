/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToRule } from "./RelationshipToRule";
import { RuleAttributes } from "./RuleAttributes";
import { RuleType } from "./RuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create rule response data.
 */
export class CreateRuleResponseData {
  /**
   * Details of a rule.
   */
  "attributes"?: RuleAttributes;
  /**
   * The unique ID for a scorecard rule.
   */
  "id"?: string;
  /**
   * Scorecard create rule response relationship.
   */
  "relationships"?: RelationshipToRule;
  /**
   * The JSON:API type for scorecard rules.
   */
  "type"?: RuleType;

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
    attributes: {
      baseName: "attributes",
      type: "RuleAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "RelationshipToRule",
    },
    type: {
      baseName: "type",
      type: "RuleType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateRuleResponseData.attributeTypeMap;
  }

  public constructor() {}
}
