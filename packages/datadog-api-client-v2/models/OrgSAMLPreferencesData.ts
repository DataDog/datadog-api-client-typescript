/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgSAMLPreferencesAttributes } from "./OrgSAMLPreferencesAttributes";
import { OrgSAMLPreferencesType } from "./OrgSAMLPreferencesType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data for updating an organization's SAML preferences.
*/
export class OrgSAMLPreferencesData {
  /**
   * Attributes for updating an organization's SAML preferences.
  */
  "attributes": OrgSAMLPreferencesAttributes;
  /**
   * The identifier of the SAML preferences resource.
  */
  "id"?: string;
  /**
   * SAML preferences resource type.
  */
  "type": OrgSAMLPreferencesType;

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
      "type": "OrgSAMLPreferencesAttributes",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "OrgSAMLPreferencesType",
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




    return OrgSAMLPreferencesData.attributeTypeMap;

  }

  public constructor() {











  }
}









