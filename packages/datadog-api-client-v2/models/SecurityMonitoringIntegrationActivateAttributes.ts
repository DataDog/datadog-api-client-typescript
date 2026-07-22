/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Overrides applied when activating the integration. All fields are optional.
*/
export class SecurityMonitoringIntegrationActivateAttributes {
  /**
   * The domain associated with the external entity source.
  */
  "domain"?: string;
  /**
   * The display name for the entity context sync configuration.
  */
  "name"?: string;
  /**
   * Free-form, non-sensitive settings for the entity context sync. The accepted keys depend on the source type.
  */
  "settings"?: { [key: string]: any; };

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
    "domain": {
      "baseName": "domain",
      "type": "string",
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "settings": {
      "baseName": "settings",
      "type": "{ [key: string]: any; }",
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




    return SecurityMonitoringIntegrationActivateAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









