/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgAuthorizedClientAttributes } from "./OrgAuthorizedClientAttributes";
import { OrgAuthorizedClientRelationships } from "./OrgAuthorizedClientRelationships";
import { OrgAuthorizedClientType } from "./OrgAuthorizedClientType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data object representing an org authorized client.
*/
export class OrgAuthorizedClientData {
  /**
   * Attributes of an org authorized client.
  */
  "attributes": OrgAuthorizedClientAttributes;
  /**
   * The unique identifier of the org authorized client.
  */
  "id": string;
  /**
   * Relationships for an org authorized client.
  */
  "relationships": OrgAuthorizedClientRelationships;
  /**
   * The resource type for org authorized clients.
  */
  "type": OrgAuthorizedClientType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "OrgAuthorizedClientAttributes",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "relationships": {
      "baseName": "relationships",
      "type": "OrgAuthorizedClientRelationships",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "OrgAuthorizedClientType",
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




    return OrgAuthorizedClientData.attributeTypeMap;

  }

  public constructor() {











  }
}









