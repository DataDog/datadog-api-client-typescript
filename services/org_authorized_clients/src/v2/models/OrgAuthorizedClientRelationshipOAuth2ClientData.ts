import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgAuthorizedClientRelationshipOAuth2ClientDataType } from "./OrgAuthorizedClientRelationshipOAuth2ClientDataType";

/**
 * Data identifying the OAuth2 client associated with this org authorized client.
 */
export class OrgAuthorizedClientRelationshipOAuth2ClientData {
  /**
   * The ID of the OAuth2 client.
   */
  "id": string;
  /**
   * OAuth2 client resource type.
   */
  "type": OrgAuthorizedClientRelationshipOAuth2ClientDataType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OrgAuthorizedClientRelationshipOAuth2ClientDataType",
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
    return OrgAuthorizedClientRelationshipOAuth2ClientData.attributeTypeMap;
  }

  public constructor() {}
}
