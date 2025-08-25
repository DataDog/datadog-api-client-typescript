/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * List of the different monitor threshold available.
*/
export class MonitorThresholds {
  /**
   * The monitor `CRITICAL` threshold.
  */
  "critical"?: number;
  /**
   * The monitor `CRITICAL` recovery threshold.
  */
  "criticalRecovery"?: number;
  /**
   * The monitor `OK` threshold.
  */
  "ok"?: number;
  /**
   * The monitor UNKNOWN threshold.
  */
  "unknown"?: number;
  /**
   * The monitor `WARNING` threshold.
  */
  "warning"?: number;
  /**
   * The monitor `WARNING` recovery threshold.
  */
  "warningRecovery"?: number;

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
    "critical": {
      "baseName": "critical",
      "type": "number",
      "format": "double",
    },
    "criticalRecovery": {
      "baseName": "critical_recovery",
      "type": "number",
      "format": "double",
    },
    "ok": {
      "baseName": "ok",
      "type": "number",
      "format": "double",
    },
    "unknown": {
      "baseName": "unknown",
      "type": "number",
      "format": "double",
    },
    "warning": {
      "baseName": "warning",
      "type": "number",
      "format": "double",
    },
    "warningRecovery": {
      "baseName": "warning_recovery",
      "type": "number",
      "format": "double",
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




    return MonitorThresholds.attributeTypeMap;

  }

  public constructor() {











  }
}









