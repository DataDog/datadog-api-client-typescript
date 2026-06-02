import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AggregatedHighFrozenFrameRate } from "./AggregatedHighFrozenFrameRate";
import { AggregatedHighScriptEval } from "./AggregatedHighScriptEval";
import { AggregatedLowCacheHitRate } from "./AggregatedLowCacheHitRate";
import { AggregatedMobileScrollFriction } from "./AggregatedMobileScrollFriction";
import { AggregatedSlowFCPHighBytes } from "./AggregatedSlowFCPHighBytes";
import { AggregatedSlowInteractionLongTask } from "./AggregatedSlowInteractionLongTask";
import { AggregatedUncompressedResource } from "./AggregatedUncompressedResource";

/**
 * Grouped detection results by detection type.
 */
export class SignalsProblemsDetections {
  /**
   * Detected high frozen frame rate issues.
   */
  "highFrozenFrameRates"?: Array<AggregatedHighFrozenFrameRate>;
  /**
   * Detected high script evaluation issues.
   */
  "highScriptEvaluations"?: Array<AggregatedHighScriptEval>;
  /**
   * Detected low cache hit rate issues.
   */
  "lowCacheHitRates"?: Array<AggregatedLowCacheHitRate>;
  /**
   * Detected mobile scroll friction issues.
   */
  "mobileScrollFrictions"?: Array<AggregatedMobileScrollFriction>;
  /**
   * Detected slow first contentful paint with high byte count issues.
   */
  "slowFcpHighBytes"?: Array<AggregatedSlowFCPHighBytes>;
  /**
   * Detected slow interaction with long task issues.
   */
  "slowInteractionLongTasks"?: Array<AggregatedSlowInteractionLongTask>;
  /**
   * Detected uncompressed resource issues.
   */
  "uncompressedResources"?: Array<AggregatedUncompressedResource>;
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
    highFrozenFrameRates: {
      baseName: "high_frozen_frame_rates",
      type: "Array<AggregatedHighFrozenFrameRate>",
    },
    highScriptEvaluations: {
      baseName: "high_script_evaluations",
      type: "Array<AggregatedHighScriptEval>",
    },
    lowCacheHitRates: {
      baseName: "low_cache_hit_rates",
      type: "Array<AggregatedLowCacheHitRate>",
    },
    mobileScrollFrictions: {
      baseName: "mobile_scroll_frictions",
      type: "Array<AggregatedMobileScrollFriction>",
    },
    slowFcpHighBytes: {
      baseName: "slow_fcp_high_bytes",
      type: "Array<AggregatedSlowFCPHighBytes>",
    },
    slowInteractionLongTasks: {
      baseName: "slow_interaction_long_tasks",
      type: "Array<AggregatedSlowInteractionLongTask>",
    },
    uncompressedResources: {
      baseName: "uncompressed_resources",
      type: "Array<AggregatedUncompressedResource>",
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
    return SignalsProblemsDetections.attributeTypeMap;
  }

  public constructor() {}
}
