/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Criteria for matching metrics based on query state.
*/
export class TagIndexingRuleMetricMatch {
  /**
   * Match metrics that are being queried.
  */
  "isQueried"?: boolean;
  /**
   * Match metrics that are not being queried.
  */
  "notQueried"?: boolean;
  /**
   * Match metrics not used in any dashboards or monitors.
  */
  "notUsedInAssets"?: boolean;
  /**
   * Window in seconds for evaluating query state.
  */
  "queriedWindowSeconds"?: number;
  /**
   * Match metrics used in dashboards or monitors.
  */
  "usedInAssets"?: boolean;

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
    "isQueried": {
      "baseName": "is_queried",
      "type": "boolean",
    },
    "notQueried": {
      "baseName": "not_queried",
      "type": "boolean",
    },
    "notUsedInAssets": {
      "baseName": "not_used_in_assets",
      "type": "boolean",
    },
    "queriedWindowSeconds": {
      "baseName": "queried_window_seconds",
      "type": "number",
      "format": "int64",
    },
    "usedInAssets": {
      "baseName": "used_in_assets",
      "type": "boolean",
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




    return TagIndexingRuleMetricMatch.attributeTypeMap;

  }

  public constructor() {











  }
}









