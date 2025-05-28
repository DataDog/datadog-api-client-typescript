/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SensitiveDataScannerMetaVersionOnly } from "./SensitiveDataScannerMetaVersionOnly";
import { SensitiveDataScannerRuleResponse } from "./SensitiveDataScannerRuleResponse";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Create rule response.
*/
export class SensitiveDataScannerCreateRuleResponse {
  /**
   * Response data related to the creation of a rule.
  */
  "data"?: SensitiveDataScannerRuleResponse;
  /**
   * Meta payload containing information about the API.
  */
  "meta"?: SensitiveDataScannerMetaVersionOnly;

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
    "data": {
      "baseName": "data",
      "type": "SensitiveDataScannerRuleResponse",
    },
    "meta": {
      "baseName": "meta",
      "type": "SensitiveDataScannerMetaVersionOnly",
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




    return SensitiveDataScannerCreateRuleResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









