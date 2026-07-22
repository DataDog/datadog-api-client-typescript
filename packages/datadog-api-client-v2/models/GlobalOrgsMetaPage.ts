/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GlobalOrgsMetaPageType } from "./GlobalOrgsMetaPageType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Paging attributes.
*/
export class GlobalOrgsMetaPage {
  /**
   * The cursor used to get the current results, if any.
  */
  "cursor"?: string;
  /**
   * Number of results returned.
  */
  "limit"?: number;
  /**
   * The cursor used to get the next results, if any.
  */
  "nextCursor"?: string;
  /**
   * The cursor used to get the previous results, if any.
  */
  "prevCursor"?: string;
  /**
   * Type of global orgs pagination.
  */
  "type"?: GlobalOrgsMetaPageType;

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
    "cursor": {
      "baseName": "cursor",
      "type": "string",
    },
    "limit": {
      "baseName": "limit",
      "type": "number",
      "format": "int32",
    },
    "nextCursor": {
      "baseName": "next_cursor",
      "type": "string",
    },
    "prevCursor": {
      "baseName": "prev_cursor",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "GlobalOrgsMetaPageType",
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




    return GlobalOrgsMetaPage.attributeTypeMap;

  }

  public constructor() {











  }
}









