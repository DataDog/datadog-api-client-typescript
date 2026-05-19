import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NullableUserRelationship } from "./NullableUserRelationship";

/**
 * Related resources for the automation rule, including the users who created and last modified it.
 */
export class AutomationRuleRelationships {
  /**
   * Relationship to user.
   */
  "createdBy"?: NullableUserRelationship;
  /**
   * Relationship to user.
   */
  "modifiedBy"?: NullableUserRelationship;
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
    createdBy: {
      baseName: "created_by",
      type: "NullableUserRelationship",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "NullableUserRelationship",
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
    return AutomationRuleRelationships.attributeTypeMap;
  }

  public constructor() {}
}
