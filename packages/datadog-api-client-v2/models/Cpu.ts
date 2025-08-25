/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * CPU usage statistics derived from historical Spark job metrics. Provides multiple estimates so users can choose between conservative and cost-saving risk profiles.
*/
export class Cpu {
  /**
   * Maximum CPU usage observed for the job, expressed in millicores. This represents the upper bound of usage.
  */
  "max"?: number;
  /**
   * 75th percentile of CPU usage (millicores). Represents a cost-saving configuration while covering most workloads.
  */
  "p75"?: number;
  /**
   * 95th percentile of CPU usage (millicores). Balances performance and cost, providing a safer margin than p75.
  */
  "p95"?: number;

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
    "max": {
      "baseName": "max",
      "type": "number",
      "format": "int64",
    },
    "p75": {
      "baseName": "p75",
      "type": "number",
      "format": "int64",
    },
    "p95": {
      "baseName": "p95",
      "type": "number",
      "format": "int64",
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




    return Cpu.attributeTypeMap;

  }

  public constructor() {











  }
}









