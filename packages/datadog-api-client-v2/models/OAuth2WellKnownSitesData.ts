/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OAuth2WellKnownSitesAttributes } from "./OAuth2WellKnownSitesAttributes";
import { OAuth2WellKnownSitesEnvType } from "./OAuth2WellKnownSitesEnvType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data object containing OAuth2 well-known sites information.
*/
export class OAuth2WellKnownSitesData {
  /**
   * Attributes containing the list of public OAuth2 sites.
  */
  "attributes": OAuth2WellKnownSitesAttributes;
  /**
   * Environment identifier.
  */
  "id": string;
  /**
   * JSON:API resource type for OAuth2 well-known sites environment.
  */
  "type": OAuth2WellKnownSitesEnvType;

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
      "type": "OAuth2WellKnownSitesAttributes",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "OAuth2WellKnownSitesEnvType",
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




    return OAuth2WellKnownSitesData.attributeTypeMap;

  }

  public constructor() {











  }
}









