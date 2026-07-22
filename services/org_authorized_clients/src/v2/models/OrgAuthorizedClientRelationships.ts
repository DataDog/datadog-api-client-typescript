import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgAuthorizedClientRelationshipOAuth2Client } from "./OrgAuthorizedClientRelationshipOAuth2Client";
import { OrgAuthorizedClientRelationshipUserAuthorizedClients } from "./OrgAuthorizedClientRelationshipUserAuthorizedClients";

/**
 * Relationships for an org authorized client.
 */
export class OrgAuthorizedClientRelationships {
  /**
   * Relationship to the OAuth2 client for this org authorized client.
   */
  "oauth2Client": OrgAuthorizedClientRelationshipOAuth2Client;
  /**
   * Relationship to the user authorized clients for this org authorized client.
   */
  "userAuthorizedClients": OrgAuthorizedClientRelationshipUserAuthorizedClients;
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
    oauth2Client: {
      baseName: "oauth2_client",
      type: "OrgAuthorizedClientRelationshipOAuth2Client",
      required: true,
    },
    userAuthorizedClients: {
      baseName: "user_authorized_clients",
      type: "OrgAuthorizedClientRelationshipUserAuthorizedClients",
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
    return OrgAuthorizedClientRelationships.attributeTypeMap;
  }

  public constructor() {}
}
