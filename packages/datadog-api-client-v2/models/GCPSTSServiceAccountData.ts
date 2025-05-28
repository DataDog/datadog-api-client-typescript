/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCPServiceAccountType } from "./GCPServiceAccountType";
import { GCPSTSServiceAccountAttributes } from "./GCPSTSServiceAccountAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Additional metadata on your generated service account.
*/
export class GCPSTSServiceAccountData {
  /**
   * Attributes associated with your service account.
  */
  "attributes"?: GCPSTSServiceAccountAttributes;
  /**
   * The type of account.
  */
  "type"?: GCPServiceAccountType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "GCPSTSServiceAccountAttributes",
    },
    "type": {
      "baseName": "type",
      "type": "GCPServiceAccountType",
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




    return GCPSTSServiceAccountData.attributeTypeMap;

  }

  public constructor() {











  }
}









