/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SAMLConfigurationRelationships } from "./SAMLConfigurationRelationships";
import { SAMLConfigurationsType } from "./SAMLConfigurationsType";
import { SAMLConfigurationUpdateAttributes } from "./SAMLConfigurationUpdateAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data for updating a SAML configuration.
*/
export class SAMLConfigurationUpdateData {
  /**
   * Attributes for updating a SAML configuration.
  */
  "attributes"?: SAMLConfigurationUpdateAttributes;
  /**
   * The UUID of the SAML configuration to update. Must match the UUID in the URL path.
  */
  "id": string;
  /**
   * Relationships of a SAML configuration.
  */
  "relationships"?: SAMLConfigurationRelationships;
  /**
   * SAML configurations resource type.
  */
  "type": SAMLConfigurationsType;

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
      "type": "SAMLConfigurationUpdateAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "relationships": {
      "baseName": "relationships",
      "type": "SAMLConfigurationRelationships",
    },
    "type": {
      "baseName": "type",
      "type": "SAMLConfigurationsType",
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




    return SAMLConfigurationUpdateData.attributeTypeMap;

  }

  public constructor() {











  }
}









