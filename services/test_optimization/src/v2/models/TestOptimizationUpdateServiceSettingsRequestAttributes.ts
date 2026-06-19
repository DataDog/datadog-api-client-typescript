import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for updating Test Optimization service settings.
 * All non-required fields are optional; only provided fields will be updated.
 * Setting a field to `null` is a no-op. To reset a setting to inherit from the repository level, use the corresponding `<setting>_inherit` field.
 */
export class TestOptimizationUpdateServiceSettingsRequestAttributes {
  /**
   * Whether Auto Test Retries are enabled for this service. Setting to `null` is a no-op; use `auto_test_retries_enabled_inherit` to reset to repository-level inheritance.
   */
  "autoTestRetriesEnabled"?: boolean;
  /**
   * When `true`, resets the Auto Test Retries setting to inherit from the repository level.
   */
  "autoTestRetriesEnabledInherit"?: boolean;
  /**
   * Whether Code Coverage is enabled for this service. Setting to `null` is a no-op; use `code_coverage_enabled_inherit` to reset to repository-level inheritance.
   */
  "codeCoverageEnabled"?: boolean;
  /**
   * When `true`, resets the Code Coverage setting to inherit from the repository level.
   */
  "codeCoverageEnabledInherit"?: boolean;
  /**
   * Whether Early Flake Detection is enabled for this service. Setting to `null` is a no-op; use `early_flake_detection_enabled_inherit` to reset to repository-level inheritance.
   */
  "earlyFlakeDetectionEnabled"?: boolean;
  /**
   * When `true`, resets the Early Flake Detection setting to inherit from the repository level.
   */
  "earlyFlakeDetectionEnabledInherit"?: boolean;
  /**
   * The environment name. If omitted, defaults to `none`.
   */
  "env"?: string;
  /**
   * Whether Failed Test Replay is enabled for this service. Setting to `null` is a no-op; use `failed_test_replay_enabled_inherit` to reset to repository-level inheritance.
   */
  "failedTestReplayEnabled"?: boolean;
  /**
   * When `true`, resets the Failed Test Replay setting to inherit from the repository level.
   */
  "failedTestReplayEnabledInherit"?: boolean;
  /**
   * This field is ignored. PR Comments cannot be overridden at the service level.
   */
  "prCommentsEnabled"?: boolean;
  /**
   * The repository identifier.
   */
  "repositoryId": string;
  /**
   * The service name.
   */
  "serviceName": string;
  /**
   * Whether Test Impact Analysis is enabled for this service. Setting to `null` is a no-op; use `test_impact_analysis_enabled_inherit` to reset to repository-level inheritance.
   */
  "testImpactAnalysisEnabled"?: boolean;
  /**
   * When `true`, resets the Test Impact Analysis setting to inherit from the repository level.
   */
  "testImpactAnalysisEnabledInherit"?: boolean;
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
    autoTestRetriesEnabled: {
      baseName: "auto_test_retries_enabled",
      type: "boolean",
    },
    autoTestRetriesEnabledInherit: {
      baseName: "auto_test_retries_enabled_inherit",
      type: "boolean",
    },
    codeCoverageEnabled: {
      baseName: "code_coverage_enabled",
      type: "boolean",
    },
    codeCoverageEnabledInherit: {
      baseName: "code_coverage_enabled_inherit",
      type: "boolean",
    },
    earlyFlakeDetectionEnabled: {
      baseName: "early_flake_detection_enabled",
      type: "boolean",
    },
    earlyFlakeDetectionEnabledInherit: {
      baseName: "early_flake_detection_enabled_inherit",
      type: "boolean",
    },
    env: {
      baseName: "env",
      type: "string",
    },
    failedTestReplayEnabled: {
      baseName: "failed_test_replay_enabled",
      type: "boolean",
    },
    failedTestReplayEnabledInherit: {
      baseName: "failed_test_replay_enabled_inherit",
      type: "boolean",
    },
    prCommentsEnabled: {
      baseName: "pr_comments_enabled",
      type: "boolean",
    },
    repositoryId: {
      baseName: "repository_id",
      type: "string",
      required: true,
    },
    serviceName: {
      baseName: "service_name",
      type: "string",
      required: true,
    },
    testImpactAnalysisEnabled: {
      baseName: "test_impact_analysis_enabled",
      type: "boolean",
    },
    testImpactAnalysisEnabledInherit: {
      baseName: "test_impact_analysis_enabled_inherit",
      type: "boolean",
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
    return TestOptimizationUpdateServiceSettingsRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
