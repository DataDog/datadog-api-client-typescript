/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DistributionPoint } from "./DistributionPoint";
import { DistributionPointItem } from "./DistributionPointItem";
import { DistributionPointsType } from "./DistributionPointsType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A distribution points metric to submit to Datadog.
*/
export class DistributionPointsSeries {
  /**
   * The name of the host that produced the distribution point metric.
  */
  "host"?: string;
  /**
   * The name of the distribution points metric.
  */
  "metric": string;
  /**
   * Points relating to the distribution point metric. All points must be tuples with timestamp and a list of values (cannot be a string). Timestamps should be in POSIX time in seconds.
  */
  "points": Array<[DistributionPointItem, DistributionPointItem]>;
  /**
   * A list of tags associated with the distribution point metric.
  */
  "tags"?: Array<string>;
  /**
   * The type of the distribution point.
  */
  "type"?: DistributionPointsType;

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
    "host": {
      "baseName": "host",
      "type": "string",
    },
    "metric": {
      "baseName": "metric",
      "type": "string",
      "required": true,
    },
    "points": {
      "baseName": "points",
      "type": "Array<[DistributionPointItem, DistributionPointItem]>",
      "required": true,
    },
    "tags": {
      "baseName": "tags",
      "type": "Array<string>",
    },
    "type": {
      "baseName": "type",
      "type": "DistributionPointsType",
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




    return DistributionPointsSeries.attributeTypeMap;

  }

  public constructor() {











  }
}









