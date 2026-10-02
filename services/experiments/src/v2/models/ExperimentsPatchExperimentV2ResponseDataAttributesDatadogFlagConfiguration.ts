import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfigurationTargetingRulesItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfigurationTargetingRulesItems";
import { ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint } from "./ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint";

/**
 * Feature flag, environment, and targeting configuration for the experiment.
 */
export class ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfiguration {
  /**
   * Key of the feature flag allocation linked to the experiment.
   */
  "allocationKey"?: string;
  /**
   * Datadog measure and filters used to select analyzed subjects.
   */
  "entryPoint": ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint | null;
  /**
   * ID of the feature flag environment used by the experiment.
   */
  "environmentId"?: string;
  /**
   * ID of the feature flag linked to the experiment.
   */
  "featureFlagId"?: string;
  /**
   * Rules that select subjects for the experiment.
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
    allocationKey: {
      baseName: "allocation_key",
      type: "string",
    },
    entryPoint: {
      baseName: "entry_point",
      type: "ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint",
      required: true,
    },
    environmentId: {
      baseName: "environment_id",
      type: "string",
    },
    featureFlagId: {
      baseName: "feature_flag_id",
      type: "string",
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
    return ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
