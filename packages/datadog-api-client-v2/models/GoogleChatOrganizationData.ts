/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GoogleChatOrganizationAttributes } from "./GoogleChatOrganizationAttributes";
import { GoogleChatOrganizationRelationships } from "./GoogleChatOrganizationRelationships";
import { GoogleChatOrganizationType } from "./GoogleChatOrganizationType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Google Chat organization data from a response.
*/
export class GoogleChatOrganizationData {
  /**
   * Google Chat organization attributes.
  */
  "attributes"?: GoogleChatOrganizationAttributes;
  /**
   * The ID of the Google Chat organization binding.
  */
  "id"?: string;
  /**
   * Google Chat organization relationships.
  */
  "relationships"?: GoogleChatOrganizationRelationships;
  /**
   * Google Chat organization resource type.
  */
  "type"?: GoogleChatOrganizationType;

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
      "type": "GoogleChatOrganizationAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "relationships": {
      "baseName": "relationships",
      "type": "GoogleChatOrganizationRelationships",
    },
    "type": {
      "baseName": "type",
      "type": "GoogleChatOrganizationType",
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




    return GoogleChatOrganizationData.attributeTypeMap;

  }

  public constructor() {











  }
}









