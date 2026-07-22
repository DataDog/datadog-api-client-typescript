import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Links for the user authorized clients relationship.
 */
export class OrgAuthorizedClientRelationshipUserAuthorizedClientsLinks {
  /**
   * Link to the user authorized clients for this org authorized client.
   */
  "related": string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    related: {
      baseName: "related",
      type: "string",
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
    return OrgAuthorizedClientRelationshipUserAuthorizedClientsLinks.attributeTypeMap;
  }

  public constructor() {}
}
