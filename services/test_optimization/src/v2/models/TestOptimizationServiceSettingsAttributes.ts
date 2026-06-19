import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for Test Optimization service settings.
 */
export class TestOptimizationServiceSettingsAttributes {
  /**
   * Whether Auto Test Retries are enabled for this service.
   */
  "autoTestRetriesEnabled"?: boolean;
  /**
   * Whether the Auto Test Retries setting is overridden at the service level.
   */
  "autoTestRetriesEnabledIsOverridden"?: boolean;
  /**
   * Whether Code Coverage is enabled for this service.
   */
  "codeCoverageEnabled"?: boolean;
  /**
   * Whether the Code Coverage setting is overridden at the service level.
   */
  "codeCoverageEnabledIsOverridden"?: boolean;
  /**
   * Whether Early Flake Detection is enabled for this service.
   */
  "earlyFlakeDetectionEnabled"?: boolean;
  /**
   * Whether the Early Flake Detection setting is overridden at the service level.
   */
  "earlyFlakeDetectionEnabledIsOverridden"?: boolean;
  /**
   * The environment name.
   */
  "env"?: string;
  /**
   * Whether Failed Test Replay is enabled for this service.
   */
  "failedTestReplayEnabled"?: boolean;
  /**
   * Whether the Failed Test Replay setting is overridden at the service level.
   */
  "failedTestReplayEnabledIsOverridden"?: boolean;
  /**
   * Whether PR Comments are enabled. This value reflects the repository-level setting and cannot be overridden at the service level.
   */
  "prCommentsEnabled"?: boolean;
  /**
   * The repository identifier.
   */
  "repositoryId"?: string;
  /**
   * The service name.
   */
  "serviceName"?: string;
  /**
   * Whether Test Impact Analysis is enabled for this service.
   */
  "testImpactAnalysisEnabled"?: boolean;
  /**
   * Whether the Test Impact Analysis setting is overridden at the service level.
   */
  "testImpactAnalysisEnabledIsOverridden"?: boolean;
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
    autoTestRetriesEnabledIsOverridden: {
      baseName: "auto_test_retries_enabled_is_overridden",
      type: "boolean",
    },
    codeCoverageEnabled: {
      baseName: "code_coverage_enabled",
      type: "boolean",
    },
    codeCoverageEnabledIsOverridden: {
      baseName: "code_coverage_enabled_is_overridden",
      type: "boolean",
    },
    earlyFlakeDetectionEnabled: {
      baseName: "early_flake_detection_enabled",
      type: "boolean",
    },
    earlyFlakeDetectionEnabledIsOverridden: {
      baseName: "early_flake_detection_enabled_is_overridden",
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
    failedTestReplayEnabledIsOverridden: {
      baseName: "failed_test_replay_enabled_is_overridden",
      type: "boolean",
    },
    prCommentsEnabled: {
      baseName: "pr_comments_enabled",
      type: "boolean",
    },
    repositoryId: {
      baseName: "repository_id",
      type: "string",
    },
    serviceName: {
      baseName: "service_name",
      type: "string",
    },
    testImpactAnalysisEnabled: {
      baseName: "test_impact_analysis_enabled",
      type: "boolean",
    },
    testImpactAnalysisEnabledIsOverridden: {
      baseName: "test_impact_analysis_enabled_is_overridden",
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
    return TestOptimizationServiceSettingsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
