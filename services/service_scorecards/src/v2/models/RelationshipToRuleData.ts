import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToRuleDataObject } from "./RelationshipToRuleDataObject";

/**
 * Relationship data for a rule.
 */
export class RelationshipToRuleData {
  /**
   * Rule relationship data.
   */
  "data"?: RelationshipToRuleDataObject;
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
    data: {
      baseName: "data",
      type: "RelationshipToRuleDataObject",
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
    return RelationshipToRuleData.attributeTypeMap;
  }

  public constructor() {}
}
