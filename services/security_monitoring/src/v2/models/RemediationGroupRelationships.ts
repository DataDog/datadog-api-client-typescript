import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RemediationGroupCaseRelationship } from "./RemediationGroupCaseRelationship";

/**
 * Relationships of a remediation group.
 */
export class RemediationGroupRelationships {
  /**
   * Relationship to the case that tracks the group's remediation.
   */
  "_case": RemediationGroupCaseRelationship;
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
    _case: {
      baseName: "case",
      type: "RemediationGroupCaseRelationship",
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
    return RemediationGroupRelationships.attributeTypeMap;
  }

  public constructor() {}
}
