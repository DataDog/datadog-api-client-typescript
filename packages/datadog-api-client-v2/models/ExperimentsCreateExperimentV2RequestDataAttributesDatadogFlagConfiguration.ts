/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfigurationTargetingRulesItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfigurationTargetingRulesItems";
import { ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint } from "./ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Feature flag, environment, and targeting configuration for a Datadog experiment.
 */
export class ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfiguration {
  /**
   * Datadog measure and filters used to select analyzed subjects.
   */
  "entryPoint": ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint | null;
  /**
   * Identifier of the feature flag environment.
   */
  "environmentId": string;
  /**
   * Identifier of the Datadog feature flag used by the experiment.
   */
  "featureFlagId": string;
  /**
   * Accepted on create but has no effect.
   */
  "resetOnFeatureFlagChange"?: boolean;
  /**
   * Use an empty array when no targeting rules apply.
   */
  "targetingRules": Array<ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfigurationTargetingRulesItems>;

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
      required: true,
    },
    environmentId: {
      baseName: "environment_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    featureFlagId: {
      baseName: "feature_flag_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    resetOnFeatureFlagChange: {
      baseName: "reset_on_feature_flag_change",
      type: "boolean",
    },
    targetingRules: {
      baseName: "targeting_rules",
      type: "Array<ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfigurationTargetingRulesItems>",
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
    return ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
