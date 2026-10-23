import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageLinkType } from "./OnCallPageLinkType";

/**
 * Reference to a page link.
 */
export class OnCallPageLinkRelationshipData {
  /**
   * The ID of the link.
   */
  "id": string;
  /**
   * Page link resource type.
   */
  "type": OnCallPageLinkType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OnCallPageLinkType",
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
    return OnCallPageLinkRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
