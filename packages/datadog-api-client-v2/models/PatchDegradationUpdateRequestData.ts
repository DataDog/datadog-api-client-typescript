/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PatchDegradationUpdateRequestDataAttributes } from "./PatchDegradationUpdateRequestDataAttributes";
import { PatchDegradationUpdateRequestDataType } from "./PatchDegradationUpdateRequestDataType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The data object for editing a degradation update.
*/
export class PatchDegradationUpdateRequestData {
  /**
   * Attributes for editing a degradation update.
  */
  "attributes"?: PatchDegradationUpdateRequestDataAttributes;
  /**
   * The ID of the degradation update to edit.
  */
  "id"?: string;
  /**
   * Degradation updates resource type.
  */
  "type": PatchDegradationUpdateRequestDataType;

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
      "type": "PatchDegradationUpdateRequestDataAttributes",
    },
    "id": {
      "baseName": "id",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "PatchDegradationUpdateRequestDataType",
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




    return PatchDegradationUpdateRequestData.attributeTypeMap;

  }

  public constructor() {











  }
}









