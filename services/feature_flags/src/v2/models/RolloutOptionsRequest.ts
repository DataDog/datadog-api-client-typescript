import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RolloutStrategy } from "./RolloutStrategy";

/**
 * Rollout options request payload.
 */
export class RolloutOptionsRequest {
  /**
   * Whether the schedule should begin automatically. Deprecated in favor of
   * `scheduled_start`, which takes precedence when both are set.
   */
  "autostart"?: boolean;
  /**
   * Controls when the schedule starts. Supersedes `autostart`. One of:
   *
   * - `none`: create the schedule without starting it.
   * - `now`: start the schedule immediately.
   * - `relative:<duration>`: start after a duration (for example `relative:2h`).
   * - `absolute:<RFC3339 timestamp>`: start at a specific time (for example `absolute:2025-06-13T12:00:00Z`).
   *
   * An `absolute` timestamp in the past or present is treated as `now`. A future start time
   * is not supported for allocations linked to a standard experiment.
   */
  "scheduledStart"?: string;
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
    scheduledStart: {
      baseName: "scheduled_start",
      type: "string",
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
