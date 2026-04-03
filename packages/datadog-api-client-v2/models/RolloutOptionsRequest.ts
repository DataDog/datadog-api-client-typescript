/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RolloutStrategy } from "./RolloutStrategy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Rollout options request payload.
 */
export class RolloutOptionsRequest {
  /**
   * Whether the schedule should begin automatically.
   */
  "autostart"?: boolean;
  /**
   * Interval in milliseconds for uniform interval strategies.
   */
  "selectionIntervalMs"?: number;
  /**
   * The progression strategy used by a progressive rollout.
   */
  "strategy": RolloutStrategy;

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
    autostart: {
      baseName: "autostart",
      type: "boolean",
    },
    selectionIntervalMs: {
      baseName: "selection_interval_ms",
      type: "number",
      format: "int64",
    },
    strategy: {
      baseName: "strategy",
      type: "RolloutStrategy",
      required: true,
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
    return RolloutOptionsRequest.attributeTypeMap;
  }

  public constructor() {}
}
