import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

import { ExperimentsTargetingRule } from "./ExperimentsTargetingRule";

/**
 * The flag rule the bandit serves through. Absent until a draft is added to a flag. Also absent when the caller lacks feature flag or environment read permissions, in which case `meta.warnings` includes `datadog_flag_configuration_omitted`.
 */
export class ExperimentsBanditFlagConfigurationV2 {
  /**
   * The key of the bandit's rule on the flag. Exposures log it.
   */
  "allocationKey": string;
  /**
   * The environment the bandit serves in.
   */
  "environmentId": string;
  /**
   * The flag the bandit serves through.
   */
  "featureFlagId": string;
  /**
   * Who the bandit serves. When empty, the bandit serves everyone in the environment.
   */
  "targetingRules": Array<ExperimentsTargetingRule>;
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
    targetingRules: {
      baseName: "targeting_rules",
      type: "Array<ExperimentsTargetingRule>",
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
    return ExperimentsBanditFlagConfigurationV2.attributeTypeMap;
  }

  public constructor() {}
}
