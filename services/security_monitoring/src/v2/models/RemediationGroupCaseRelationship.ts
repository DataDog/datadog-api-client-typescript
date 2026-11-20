import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RemediationGroupCaseRelationshipData } from "./RemediationGroupCaseRelationshipData";

/**
 * Relationship to the case that tracks the group's remediation.
 */
export class RemediationGroupCaseRelationship {
  /**
   * The group's case, or null when the group has no case yet.
   */
  "data": RemediationGroupCaseRelationshipData | null;
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
      type: "RemediationGroupCaseRelationshipData",
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
    return RemediationGroupCaseRelationship.attributeTypeMap;
  }

  public constructor() {}
}
