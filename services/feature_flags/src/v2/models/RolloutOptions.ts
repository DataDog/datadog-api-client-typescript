import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RolloutStrategy } from "./RolloutStrategy";

/**
 * Applied progression options for a progressive rollout.
 */
export class RolloutOptions {
  /**
   * Whether the schedule starts automatically.
   */
  "autostart": boolean;
  /**
   * Interval in milliseconds for uniform interval strategies.
   */
  "selectionIntervalMs": number;
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
      required: true,
    },
    selectionIntervalMs: {
      baseName: "selection_interval_ms",
      type: "number",
      required: true,
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
    return RolloutOptions.attributeTypeMap;
  }

  public constructor() {}
}
