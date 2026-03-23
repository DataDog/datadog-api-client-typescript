import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for updating Test Optimization service settings.
 * All non-required fields are optional; only provided fields will be updated.
 */
export class TestOptimizationUpdateServiceSettingsRequestAttributes {
  /**
   * Whether Auto Test Retries are enabled for this service.
   */
  "autoTestRetriesEnabled"?: boolean;
  /**
   * Whether Code Coverage is enabled for this service.
   */
  "codeCoverageEnabled"?: boolean;
  /**
   * Whether Early Flake Detection is enabled for this service.
   */
  "earlyFlakeDetectionEnabled"?: boolean;
  /**
   * The environment name. If omitted, defaults to `none`.
   */
  "env"?: string;
  /**
   * Whether Failed Test Replay is enabled for this service.
   */
  "failedTestReplayEnabled"?: boolean;
  /**
   * Whether PR Comments are enabled for this service.
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
   * Whether Test Impact Analysis is enabled for this service.
   */
  "testImpactAnalysisEnabled"?: boolean;
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
    codeCoverageEnabled: {
      baseName: "code_coverage_enabled",
      type: "boolean",
    },
    earlyFlakeDetectionEnabled: {
      baseName: "early_flake_detection_enabled",
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
