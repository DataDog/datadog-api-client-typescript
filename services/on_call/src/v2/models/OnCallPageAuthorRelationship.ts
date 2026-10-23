import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageAuthorRelationshipData } from "./OnCallPageAuthorRelationshipData";

/**
 * Reference to the entity that performed an action on the page.
 */
export class OnCallPageAuthorRelationship {
  /**
   * Reference to the author of a page action.
   */
  "data"?: OnCallPageAuthorRelationshipData;
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
      type: "OnCallPageAuthorRelationshipData",
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
    return OnCallPageAuthorRelationship.attributeTypeMap;
  }

  public constructor() {}
}
