/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ListStreamColumn } from "./ListStreamColumn";
import { ListStreamQuery } from "./ListStreamQuery";
import { ListStreamResponseFormat } from "./ListStreamResponseFormat";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Updated list stream widget.
*/
export class ListStreamWidgetRequest {
  /**
   * Widget columns.
  */
  "columns": Array<ListStreamColumn>;
  /**
   * Updated list stream widget.
  */
  "query": ListStreamQuery;
  /**
   * Widget response format.
  */
  "responseFormat": ListStreamResponseFormat;

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
    "columns": {
      "baseName": "columns",
      "type": "Array<ListStreamColumn>",
      "required": true,
    },
    "query": {
      "baseName": "query",
      "type": "ListStreamQuery",
      "required": true,
    },
    "responseFormat": {
      "baseName": "response_format",
      "type": "ListStreamResponseFormat",
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




    return ListStreamWidgetRequest.attributeTypeMap;

  }

  public constructor() {











  }
}









