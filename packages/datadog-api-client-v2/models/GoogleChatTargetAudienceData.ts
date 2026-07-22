/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GoogleChatTargetAudienceAttributes } from "./GoogleChatTargetAudienceAttributes";
import { GoogleChatTargetAudienceType } from "./GoogleChatTargetAudienceType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Google Chat target audience data from a response.
*/
export class GoogleChatTargetAudienceData {
  /**
   * Google Chat target audience attributes.
  */
  "attributes"?: GoogleChatTargetAudienceAttributes;
  /**
   * The ID of the target audience.
  */
  "id"?: string;
  /**
   * Google Chat target audience resource type.
  */
  "type"?: GoogleChatTargetAudienceType;

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
      "type": "GoogleChatTargetAudienceAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "GoogleChatTargetAudienceType",
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




    return GoogleChatTargetAudienceData.attributeTypeMap;

  }

  public constructor() {











  }
}









