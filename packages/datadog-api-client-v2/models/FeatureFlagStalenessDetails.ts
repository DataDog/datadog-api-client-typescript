/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FeatureFlagStalenessCodeReference } from "./FeatureFlagStalenessCodeReference";
import { FeatureFlagStalenessRecommendedAction } from "./FeatureFlagStalenessRecommendedAction";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The feature flag's current staleness state and suggested actions.
 */
export class FeatureFlagStalenessDetails {
  /**
   * Repositories and files where the flag is referenced in source code.
   */
  "codeReferences"?: Array<FeatureFlagStalenessCodeReference>;
  /**
   * The ID of the user who dismissed the staleness recommendation.
   */
  "dismissedBy"?: string;
  /**
   * The ID of the feature flag whose staleness state is returned.
   */
  "id"?: string;
  /**
   * Suggested actions for the flag. The first action is the primary recommendation.
   */
  "recommendedActions"?: Array<FeatureFlagStalenessRecommendedAction>;
  /**
   * Time until which staleness checks are paused for the flag.
   */
  "skipStateCheckUntil"?: Date;
  /**
   * Why the flag is stale or has a manually selected state. Values include `FULLY_ROLLED_OUT`, `NO_EVALUATIONS`, `NO_ACTIVITY`, and `USER_SET`.
   */
  "staleReason"?: string;
  /**
   * The current state, such as `ACTIVE`, `STALE`, or `PERMANENT`.
   */
  "stalenessStatus"?: string;

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
    codeReferences: {
      baseName: "code_references",
      type: "Array<FeatureFlagStalenessCodeReference>",
    },
    dismissedBy: {
      baseName: "dismissed_by",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    recommendedActions: {
      baseName: "recommended_actions",
      type: "Array<FeatureFlagStalenessRecommendedAction>",
    },
    skipStateCheckUntil: {
      baseName: "skip_state_check_until",
      type: "Date",
      format: "date-time",
    },
    staleReason: {
      baseName: "stale_reason",
      type: "string",
    },
    stalenessStatus: {
      baseName: "staleness_status",
      type: "string",
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
    return FeatureFlagStalenessDetails.attributeTypeMap;
  }

  public constructor() {}
}
