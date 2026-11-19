/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsTargetingRule } from "./ExperimentsTargetingRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The flag and environment the bandit serves on, and who it serves there. The server chooses the rule's `allocation_key`. On create, `feature_flag_id` and `environment_id` are required, and `null` is the same as omitting it. On update, omitted fields are unchanged, and `null` takes a draft off its flag, which also clears its variants and scheduled end. Moving a draft to another flag clears its variants unless the request sets them. Only a draft can change it.
 */
export class ExperimentsBanditFlagConfigurationInputV2 {
  /**
   * The environment the bandit serves in.
   */
  "environmentId"?: string;
  /**
   * The flag the bandit serves through.
   */
  "featureFlagId"?: string;
  /**
   * Who the bandit serves. When empty, the bandit serves everyone in the environment.
   */
  "targetingRules"?: Array<ExperimentsTargetingRule>;

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
    environmentId: {
      baseName: "environment_id",
      type: "string",
      format: "uuid",
    },
    featureFlagId: {
      baseName: "feature_flag_id",
      type: "string",
      format: "uuid",
    },
    targetingRules: {
      baseName: "targeting_rules",
      type: "Array<ExperimentsTargetingRule>",
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
    return ExperimentsBanditFlagConfigurationInputV2.attributeTypeMap;
  }

  public constructor() {}
}
