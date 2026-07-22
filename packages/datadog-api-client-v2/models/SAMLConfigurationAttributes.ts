/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes of a SAML configuration.
*/
export class SAMLConfigurationAttributes {
  /**
   * The assertion consumer service (ACS) URLs that the identity provider posts SAML responses to.
  */
  "assertionConsumerService"?: Array<string>;
  /**
   * Creation time of the SAML configuration.
  */
  "createdAt"?: Date;
  /**
   * The service provider entity ID Datadog presents to the identity provider.
  */
  "entityId"?: string;
  /**
   * Expiration time of the uploaded identity provider metadata.
  */
  "expiresAt"?: Date;
  /**
   * Whether identity-provider-initiated login is enabled for the organization.
  */
  "idpInitiated"?: boolean;
  /**
   * Email domains for which users are automatically provisioned on first SAML login
   * (just-in-time provisioning).
  */
  "jitDomains"?: Array<string>;
  /**
   * Time of the last SAML configuration modification.
  */
  "modifiedAt"?: Date;
  /**
   * The single sign-on URL users can visit to start a SAML login.
   * Returns `null` when the organization is identity-provider-initiated and has no subdomain.
  */
  "ssoUrl"?: string;

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
    "assertionConsumerService": {
      "baseName": "assertion_consumer_service",
      "type": "Array<string>",
    },
    "createdAt": {
      "baseName": "created_at",
      "type": "Date",
      "format": "date-time",
    },
    "entityId": {
      "baseName": "entity_id",
      "type": "string",
    },
    "expiresAt": {
      "baseName": "expires_at",
      "type": "Date",
      "format": "date-time",
    },
    "idpInitiated": {
      "baseName": "idp_initiated",
      "type": "boolean",
    },
    "jitDomains": {
      "baseName": "jit_domains",
      "type": "Array<string>",
    },
    "modifiedAt": {
      "baseName": "modified_at",
      "type": "Date",
      "format": "date-time",
    },
    "ssoUrl": {
      "baseName": "sso_url",
      "type": "string",
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




    return SAMLConfigurationAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









