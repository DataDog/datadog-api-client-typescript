/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOTimeframe } from "./SLOTimeframe";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * SLO thresholds (target and optionally warning) for a single time window.
 */

export class SLOThreshold {
  /**
   * The target value for the service level indicator within the corresponding timeframe.
   */
  "target": number;
  /**
   * A string representation of the target that indicates its precision. It uses trailing zeros to show significant decimal places (e.g. `98.00`).  Always included in service level objective responses. Ignored in create/update requests.
   */
  "targetDisplay"?: string;
  "timeframe": SLOTimeframe;
  /**
   * The warning value for the service level objective.
   */
  "warning"?: number;
  /**
   * A string representation of the warning target (see the description of the `target_display` field for details).  Included in service level objective responses if a warning target exists. Ignored in create/update requests.
   */
  "warningDisplay"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    target: {
      baseName: "target",
      type: "number",
      format: "double",
    },
    targetDisplay: {
      baseName: "target_display",
      type: "string",
      format: "",
    },
    timeframe: {
      baseName: "timeframe",
      type: "SLOTimeframe",
      format: "",
    },
    warning: {
      baseName: "warning",
      type: "number",
      format: "double",
    },
    warningDisplay: {
      baseName: "warning_display",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SLOThreshold.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SLOThreshold {
    const res = new SLOThreshold();

    if (data.target === undefined) {
      throw new TypeError(
        "missing required attribute 'target' on 'SLOThreshold' object"
      );
    }
    res.target = ObjectSerializer.deserialize(data.target, "number", "double");

    res.targetDisplay = ObjectSerializer.deserialize(
      data.target_display,
      "string",
      ""
    );

    if (data.timeframe === undefined) {
      throw new TypeError(
        "missing required attribute 'timeframe' on 'SLOThreshold' object"
      );
    }
    if (["7d", "30d", "90d", undefined].includes(data.timeframe)) {
      res.timeframe = data.timeframe;
    } else {
      throw TypeError(`invalid enum value ${data.timeframe} for timeframe`);
    }

    res.warning = ObjectSerializer.deserialize(
      data.warning,
      "number",
      "double"
    );

    res.warningDisplay = ObjectSerializer.deserialize(
      data.warning_display,
      "string",
      ""
    );

    return res;
  }

  static serialize(data: SLOThreshold): { [key: string]: any } {
    const attributeTypes = SLOThreshold.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data.target === undefined) {
      throw new TypeError(
        "missing required attribute 'target' on 'SLOThreshold' object"
      );
    }
    res.target = ObjectSerializer.serialize(data.target, "number", "double");

    res.target_display = ObjectSerializer.serialize(
      data.targetDisplay,
      "string",
      ""
    );

    if (data.timeframe === undefined) {
      throw new TypeError(
        "missing required attribute 'timeframe' on 'SLOThreshold' object"
      );
    }
    if (["7d", "30d", "90d", undefined].includes(data.timeframe)) {
      res.timeframe = data.timeframe;
    } else {
      throw TypeError(`invalid enum value ${data.timeframe} for timeframe`);
    }

    res.warning = ObjectSerializer.serialize(data.warning, "number", "double");

    res.warning_display = ObjectSerializer.serialize(
      data.warningDisplay,
      "string",
      ""
    );

    return res;
  }

  public constructor() {}
}
