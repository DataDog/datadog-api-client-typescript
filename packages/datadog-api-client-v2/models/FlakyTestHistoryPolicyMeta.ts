/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FlakyTestHistoryPolicyMetaConfig } from "./FlakyTestHistoryPolicyMetaConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata about the policy that triggered this status change.
 */
export class FlakyTestHistoryPolicyMeta {
  /**
   * Branches where the test was flaky at the time of the status change.
   */
  "branches"?: Array<string>;
  /**
   * Configuration parameters of the policy that triggered this status change.
   */
  "config"?: FlakyTestHistoryPolicyMetaConfig;
  /**
   * The number of days the test has been active at the time of the status change.
   */
  "daysActive"?: number;
  /**
   * The number of days since the test last exhibited flakiness.
   */
  "daysWithoutFlake"?: number;
  /**
   * The failure rate of the test at the time of the status change.
   */
  "failureRate"?: number;
  /**
   * The previous state of the test.
   */
  "state"?: string;
  /**
   * The total number of test runs at the time of the status change.
   */
  "totalRuns"?: number;

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
    branches: {
      baseName: "branches",
      type: "Array<string>",
    },
    config: {
      baseName: "config",
      type: "FlakyTestHistoryPolicyMetaConfig",
    },
    daysActive: {
      baseName: "days_active",
      type: "number",
      format: "int32",
    },
    daysWithoutFlake: {
      baseName: "days_without_flake",
      type: "number",
      format: "int32",
    },
    failureRate: {
      baseName: "failure_rate",
      type: "number",
      format: "double",
    },
    state: {
      baseName: "state",
      type: "string",
    },
    totalRuns: {
      baseName: "total_runs",
      type: "number",
      format: "int32",
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
    return FlakyTestHistoryPolicyMeta.attributeTypeMap;
  }

  public constructor() {}
}
