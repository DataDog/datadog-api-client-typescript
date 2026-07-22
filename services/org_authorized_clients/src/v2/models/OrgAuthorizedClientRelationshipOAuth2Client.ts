import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgAuthorizedClientRelationshipOAuth2ClientData } from "./OrgAuthorizedClientRelationshipOAuth2ClientData";

/**
 * Relationship to the OAuth2 client for this org authorized client.
 */
export class OrgAuthorizedClientRelationshipOAuth2Client {
  /**
   * Data identifying the OAuth2 client associated with this org authorized client.
   */
  "data": OrgAuthorizedClientRelationshipOAuth2ClientData;
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
    data: {
      baseName: "data",
      type: "OrgAuthorizedClientRelationshipOAuth2ClientData",
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
    return OrgAuthorizedClientRelationshipOAuth2Client.attributeTypeMap;
  }

  public constructor() {}
}
