import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupRelationshipToOneData } from "./OrgGroupRelationshipToOneData";

/**
 * Relationship to a single org group.
 */
export class OrgGroupRelationshipToOne {
  /**
   * A reference to an org group.
   */
  "data": OrgGroupRelationshipToOneData;
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
      type: "OrgGroupRelationshipToOneData",
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
    return OrgGroupRelationshipToOne.attributeTypeMap;
  }

  public constructor() {}
}
