/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgAuthorizedClientRelationshipUserAuthorizedClientsData } from "./OrgAuthorizedClientRelationshipUserAuthorizedClientsData";
import { OrgAuthorizedClientRelationshipUserAuthorizedClientsLinks } from "./OrgAuthorizedClientRelationshipUserAuthorizedClientsLinks";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Relationship to the user authorized clients for this org authorized client.
*/
export class OrgAuthorizedClientRelationshipUserAuthorizedClients {
  /**
   * List of user authorized client relationship data objects.
  */
  "data": Array<OrgAuthorizedClientRelationshipUserAuthorizedClientsData>;
  /**
   * Links for the user authorized clients relationship.
  */
  "links": OrgAuthorizedClientRelationshipUserAuthorizedClientsLinks;

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
      "type": "Array<OrgAuthorizedClientRelationshipUserAuthorizedClientsData>",
      "required": true,
    },
    "links": {
      "baseName": "links",
      "type": "OrgAuthorizedClientRelationshipUserAuthorizedClientsLinks",
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




    return OrgAuthorizedClientRelationshipUserAuthorizedClients.attributeTypeMap;

  }

  public constructor() {











  }
}









