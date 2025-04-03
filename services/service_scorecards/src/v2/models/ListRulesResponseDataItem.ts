import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToRule } from "./RelationshipToRule";
import { RuleAttributes } from "./RuleAttributes";
import { RuleType } from "./RuleType";

/**
 * Rule details.
 */
export class ListRulesResponseDataItem {
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
    return ListRulesResponseDataItem.attributeTypeMap;
  }

  public constructor() {}
}
