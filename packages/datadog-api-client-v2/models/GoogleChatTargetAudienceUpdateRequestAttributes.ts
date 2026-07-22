/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes for updating a Google Chat target audience.
*/
export class GoogleChatTargetAudienceUpdateRequestAttributes {
  /**
   * The audience ID.
  */
  "audienceId"?: string;
  /**
   * The audience name.
  */
  "audienceName"?: string;

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
    "audienceId": {
      "baseName": "audience_id",
      "type": "string",
    },
    "audienceName": {
      "baseName": "audience_name",
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




    return GoogleChatTargetAudienceUpdateRequestAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









