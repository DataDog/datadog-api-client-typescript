import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageUserRelationshipData } from "./OnCallPageUserRelationshipData";

/**
 * The users responding to the page.
 */
export class OnCallPageRespondersRelationship {
  /**
   * The list of responders.
   */
  "data"?: Array<OnCallPageUserRelationshipData>;
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
      type: "Array<OnCallPageUserRelationshipData>",
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
    return OnCallPageRespondersRelationship.attributeTypeMap;
  }

  public constructor() {}
}
