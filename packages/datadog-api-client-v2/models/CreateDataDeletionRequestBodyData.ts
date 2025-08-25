/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateDataDeletionRequestBodyAttributes } from "./CreateDataDeletionRequestBodyAttributes";
import { CreateDataDeletionRequestBodyDataType } from "./CreateDataDeletionRequestBodyDataType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Data needed to create a data deletion request.
*/
export class CreateDataDeletionRequestBodyData {
  /**
   * Attributes for creating a data deletion request.
  */
  "attributes": CreateDataDeletionRequestBodyAttributes;
  /**
   * The deletion request type.
  */
  "type": CreateDataDeletionRequestBodyDataType;

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
      "type": "CreateDataDeletionRequestBodyAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "CreateDataDeletionRequestBodyDataType",
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




    return CreateDataDeletionRequestBodyData.attributeTypeMap;

  }

  public constructor() {











  }
}









