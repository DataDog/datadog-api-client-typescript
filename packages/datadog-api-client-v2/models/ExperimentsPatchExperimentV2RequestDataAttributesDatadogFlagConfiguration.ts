/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfigurationTargetingRulesItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfigurationTargetingRulesItems";
import { ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint } from "./ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Feature flag, environment, and targeting configuration for the experiment.
 */
export class ExperimentsPatchExperimentV2RequestDataAttributesDatadogFlagConfiguration {
  /**
   * Datadog measure and filters used to select analyzed subjects.
   */
  "entryPoint"?: ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint;
  /**
   * ID of the feature flag environment used by the experiment.
   */
  "environmentId"?: string;
  /**
   * ID of the feature flag linked to the experiment.
   */
  "featureFlagId"?: string;
  /**
   * Set true to replace an existing draft allocation when feature_flag_id changes. The replacement resets all flag-bound randomization state.
   */
  "resetOnFeatureFlagChange"?: boolean;
  /**
   * Omit to keep the stored rules. Use an empty array to remove targeting rules.
   */
  "targetingRules"?: Array<ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfigurationTargetingRulesItems>;

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
    entryPoint: {
      baseName: "entry_point",
      type: "ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint",
    },
    environmentId: {
      baseName: "environment_id",
      type: "string",
    },
    featureFlagId: {
      baseName: "feature_flag_id",
      type: "string",
    },
    resetOnFeatureFlagChange: {
      baseName: "reset_on_feature_flag_change",
      type: "boolean",
    },
    targetingRules: {
      baseName: "targeting_rules",
      type: "Array<ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfigurationTargetingRulesItems>",
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
    return ExperimentsPatchExperimentV2RequestDataAttributesDatadogFlagConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
