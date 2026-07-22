/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GoogleChatDelegatedUserType } from "./GoogleChatDelegatedUserType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Delegated user relationship data.
*/
export class GoogleChatOrganizationRelationshipsDelegatedUserData {
  /**
   * The ID of the delegated user.
  */
  "id"?: string;
  /**
   * Google Chat delegated user resource type.
  */
  "type"?: GoogleChatDelegatedUserType;

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
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "GoogleChatDelegatedUserType",
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




    return GoogleChatOrganizationRelationshipsDelegatedUserData.attributeTypeMap;

  }

  public constructor() {











  }
}









