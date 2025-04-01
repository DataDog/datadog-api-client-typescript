/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Type of aggregation performed in the monitor query.
*/
export class MonitorOptionsAggregation {
  /**
   * Group to break down the monitor on.
  */
  "groupBy"?: string;
  /**
   * Metric name used in the monitor.
  */
  "metric"?: string;
  /**
   * Metric type used in the monitor.
  */
  "type"?: string;

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
    "groupBy": {
      "baseName": "group_by",
      "type": "string",
    },
    "metric": {
      "baseName": "metric",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "string",
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




    return MonitorOptionsAggregation.attributeTypeMap;

  }

  public constructor() {











  }
}









