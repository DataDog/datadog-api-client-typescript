/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Events association item.
*/
export class EntityV3DatadogEventItem {
  /**
   * The name of the query.
  */
  "name"?: string;
  /**
   * The query to run.
  */
  "query"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "query": {
      "baseName": "query",
      "type": "string",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return EntityV3DatadogEventItem.attributeTypeMap;

  }

  public constructor() {











  }
}









