/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOCorrectionCreateRequestAttributes } from "./SLOCorrectionCreateRequestAttributes";
import { SLOCorrectionType } from "./SLOCorrectionType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The data object associated with the SLO correction to be created.
*/
export class SLOCorrectionCreateData {
  /**
   * The attribute object associated with the SLO correction to be created.
  */
  "attributes"?: SLOCorrectionCreateRequestAttributes;
  /**
   * SLO correction resource type.
  */
  "type": SLOCorrectionType;

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
      "type": "SLOCorrectionCreateRequestAttributes",
    },
    "type": {
      "baseName": "type",
      "type": "SLOCorrectionType",
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




    return SLOCorrectionCreateData.attributeTypeMap;

  }

  public constructor() {











  }
}









