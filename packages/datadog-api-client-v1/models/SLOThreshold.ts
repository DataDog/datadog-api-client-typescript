/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOTimeframe } from "./SLOTimeframe";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * SLO thresholds (target and optionally warning) for a single time window.
*/
export class SLOThreshold {
  /**
   * The target value for the service level indicator within the corresponding
   * timeframe.
  */
  "target": number;
  /**
   * A string representation of the target that indicates its precision.
   * It uses trailing zeros to show significant decimal places (for example `98.00`).
   * 
   * Always included in service level objective responses. Ignored in
   * create/update requests.
  */
  "targetDisplay"?: string;
  /**
   * The SLO time window options. Note that "custom" is not a valid option for creating
   * or updating SLOs. It is only used when querying SLO history over custom timeframes.
  */
  "timeframe": SLOTimeframe;
  /**
   * The warning value for the service level objective.
  */
  "warning"?: number;
  /**
   * A string representation of the warning target (see the description of
   * the `target_display` field for details).
   * 
   * Included in service level objective responses if a warning target exists.
   * Ignored in create/update requests.
  */
  "warningDisplay"?: string;

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
    "target": {
      "baseName": "target",
      "type": "number",
      "required": true,
      "format": "double",
    },
    "targetDisplay": {
      "baseName": "target_display",
      "type": "string",
    },
    "timeframe": {
      "baseName": "timeframe",
      "type": "SLOTimeframe",
      "required": true,
    },
    "warning": {
      "baseName": "warning",
      "type": "number",
      "format": "double",
    },
    "warningDisplay": {
      "baseName": "warning_display",
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




    return SLOThreshold.attributeTypeMap;

  }

  public constructor() {











  }
}









