/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgAuthorizedClientRelationshipOAuth2ClientData } from "./OrgAuthorizedClientRelationshipOAuth2ClientData";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




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
    "data": {
      "baseName": "data",
      "type": "OrgAuthorizedClientRelationshipOAuth2ClientData",
      "required": true,
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

  public constructor() {











  }
}









