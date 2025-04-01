/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorSearchCountItem } from "./MonitorSearchCountItem";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The counts of monitor groups per different criteria.
*/
export class MonitorGroupSearchResponseCounts {
  /**
   * Search facets.
  */
  "status"?: Array<MonitorSearchCountItem>;
  /**
   * Search facets.
  */
  "type"?: Array<MonitorSearchCountItem>;

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
    "status": {
      "baseName": "status",
      "type": "Array<MonitorSearchCountItem>",
    },
    "type": {
      "baseName": "type",
      "type": "Array<MonitorSearchCountItem>",
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




    return MonitorGroupSearchResponseCounts.attributeTypeMap;

  }

  public constructor() {











  }
}









