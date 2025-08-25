/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorFormulaAndFunctionEventQueryGroupBySort } from "./MonitorFormulaAndFunctionEventQueryGroupBySort";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * List of objects used to group by.
*/
export class MonitorFormulaAndFunctionEventQueryGroupBy {
  /**
   * Event facet.
  */
  "facet": string;
  /**
   * Number of groups to return.
  */
  "limit"?: number;
  /**
   * Options for sorting group by results.
  */
  "sort"?: MonitorFormulaAndFunctionEventQueryGroupBySort;

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
    "facet": {
      "baseName": "facet",
      "type": "string",
      "required": true,
    },
    "limit": {
      "baseName": "limit",
      "type": "number",
      "format": "int64",
    },
    "sort": {
      "baseName": "sort",
      "type": "MonitorFormulaAndFunctionEventQueryGroupBySort",
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




    return MonitorFormulaAndFunctionEventQueryGroupBy.attributeTypeMap;

  }

  public constructor() {











  }
}









