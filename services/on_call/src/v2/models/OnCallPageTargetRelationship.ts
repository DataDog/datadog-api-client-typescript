import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageTargetRelationshipData } from "./OnCallPageTargetRelationshipData";

/**
 * The team, user, or cross-organization handle that was paged.
 */
export class OnCallPageTargetRelationship {
  /**
   * Reference to the target of the page.
   */
  "data"?: OnCallPageTargetRelationshipData;
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
      type: "OnCallPageTargetRelationshipData",
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
    return OnCallPageTargetRelationship.attributeTypeMap;
  }

  public constructor() {}
}
