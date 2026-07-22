/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DdsqlTabularQueryRequestAttributes } from "./DdsqlTabularQueryRequestAttributes";
import { DdsqlTabularQueryRequestType } from "./DdsqlTabularQueryRequestType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * JSON:API resource object for a DDSQL tabular query execution request.
*/
export class DdsqlTabularQueryRequestData {
  /**
   * Attributes describing the DDSQL query to execute.
  */
  "attributes": DdsqlTabularQueryRequestAttributes;
  /**
   * JSON:API resource type for a DDSQL tabular query request.
  */
  "type": DdsqlTabularQueryRequestType;

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
      "type": "DdsqlTabularQueryRequestAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "DdsqlTabularQueryRequestType",
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




    return DdsqlTabularQueryRequestData.attributeTypeMap;

  }

  public constructor() {











  }
}









