/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for updating an environment.
 */
export class UpdateEnvironmentAttributes {
  /**
   * Indicates whether this is a production environment. If omitted, resets to false. Include the existing value to preserve it.
   */
  "isProduction"?: boolean;
  /**
   * The name of the environment. Required on every request and unique within the organization. Must contain 1 to 200 ASCII characters, start with a letter or digit, and contain only letters, digits, spaces, underscores, hyphens, and periods.
   */
  "name"?: string;
  /**
   * Controls whether feature flag evaluation events may include original targeting identifiers and full evaluation context. When true, SDKs may include this data. When false, SDKs hash targeting identifiers and omit evaluation context. If omitted, the existing value is preserved.
   */
  "observeFullEvaluationData"?: boolean;
  /**
   * Required list of at least one exact DD_ENV value associated with this environment. Values cannot be used by another environment in the same organization. Wildcards and search expressions are not supported.
   */
  "queries"?: Array<string>;
  /**
   * Indicates whether feature flag changes require approval in this environment. If omitted, resets to false. Include the existing value to preserve it.
   */
  "requireFeatureFlagApproval"?: boolean;

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
    isProduction: {
      baseName: "is_production",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    observeFullEvaluationData: {
      baseName: "observe_full_evaluation_data",
      type: "boolean",
    },
    queries: {
      baseName: "queries",
      type: "Array<string>",
    },
    requireFeatureFlagApproval: {
      baseName: "require_feature_flag_approval",
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
    return UpdateEnvironmentAttributes.attributeTypeMap;
  }

  public constructor() {}
}
