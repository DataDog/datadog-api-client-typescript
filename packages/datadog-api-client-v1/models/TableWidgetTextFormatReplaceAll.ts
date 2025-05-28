/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableWidgetTextFormatReplaceAllType } from "./TableWidgetTextFormatReplaceAllType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Match All definition.
*/
export class TableWidgetTextFormatReplaceAll {
  /**
   * Table widget text format replace all type.
  */
  "type": TableWidgetTextFormatReplaceAllType;
  /**
   * Replace All type.
  */
  "_with": string;

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
    "type": {
      "baseName": "type",
      "type": "TableWidgetTextFormatReplaceAllType",
      "required": true,
    },
    "_with": {
      "baseName": "with",
      "type": "string",
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




    return TableWidgetTextFormatReplaceAll.attributeTypeMap;

  }

  public constructor() {











  }
}









