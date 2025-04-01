/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Service's external links.
*/
export class ServiceDefinitionV2Dot2Link {
  /**
   * Link name.
  */
  "name": string;
  /**
   * Link provider.
  */
  "provider"?: string;
  /**
   * Link type. Datadog recognizes the following types: `runbook`, `doc`, `repo`, `dashboard`, and `other`.
  */
  "type": string;
  /**
   * Link URL.
  */
  "url": string;

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
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "provider": {
      "baseName": "provider",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "string",
      "required": true,
    },
    "url": {
      "baseName": "url",
      "type": "string",
      "required": true,
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




    return ServiceDefinitionV2Dot2Link.attributeTypeMap;

  }

  public constructor() {











  }
}









