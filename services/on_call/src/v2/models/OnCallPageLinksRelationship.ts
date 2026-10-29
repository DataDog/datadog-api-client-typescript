import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageLinkRelationshipData } from "./OnCallPageLinkRelationshipData";

/**
 * Links between the Page and other Datadog resources, such as incidents. Always empty when listing Pages.
 */
export class OnCallPageLinksRelationship {
  /**
   * The list of Page links.
   */
  "data"?: Array<OnCallPageLinkRelationshipData>;
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
      type: "Array<OnCallPageLinkRelationshipData>",
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
    return OnCallPageLinksRelationship.attributeTypeMap;
  }

  public constructor() {}
}
