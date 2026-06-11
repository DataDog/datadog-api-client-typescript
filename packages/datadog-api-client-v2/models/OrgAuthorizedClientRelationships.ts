/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgAuthorizedClientRelationshipOAuth2Client } from "./OrgAuthorizedClientRelationshipOAuth2Client";
import { OrgAuthorizedClientRelationshipUserAuthorizedClients } from "./OrgAuthorizedClientRelationshipUserAuthorizedClients";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  "additionalProperties"?: { [key: string]: any };

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
