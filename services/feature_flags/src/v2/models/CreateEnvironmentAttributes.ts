import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating a new environment.
 */
export class CreateEnvironmentAttributes {
  /**
   * Indicates whether this is a production environment.
   */
  "isProduction"?: boolean;
  /**
   * The name of the environment. Required on every request and unique within the organization. Must contain 1 to 200 ASCII characters, start with a letter or digit, and contain only letters, digits, spaces, underscores, hyphens, and periods.
   */
  "name": string;
  /**
   * Controls whether feature flag evaluation events may include original targeting identifiers and full evaluation context. When true, SDKs may include this data. When false, SDKs hash targeting identifiers and omit evaluation context. If omitted, defaults to false.
   */
  "observeFullEvaluationData"?: boolean;
  /**
   * Required list of at least one exact DD_ENV value associated with this environment. Values cannot be used by another environment in the same organization. Wildcards and search expressions are not supported.
   */
  "queries": Array<string>;
  /**
   * Indicates whether feature flag changes require approval in this environment.
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
      required: true,
    },
    observeFullEvaluationData: {
      baseName: "observe_full_evaluation_data",
      type: "boolean",
    },
    queries: {
      baseName: "queries",
      type: "Array<string>",
      required: true,
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
    return CreateEnvironmentAttributes.attributeTypeMap;
  }

  public constructor() {}
}
