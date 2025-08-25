/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The metadata action applied on the scope matching the rule
*/
export class CloudWorkloadSecurityAgentRuleActionMetadata {
  /**
   * The image tag of the metadata action
  */
  "imageTag"?: string;
  /**
   * The service of the metadata action
  */
  "service"?: string;
  /**
   * The short image of the metadata action
  */
  "shortImage"?: string;

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
    "imageTag": {
      "baseName": "image_tag",
      "type": "string",
    },
    "service": {
      "baseName": "service",
      "type": "string",
    },
    "shortImage": {
      "baseName": "short_image",
      "type": "string",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return CloudWorkloadSecurityAgentRuleActionMetadata.attributeTypeMap;

  }

  public constructor() {











  }
}









