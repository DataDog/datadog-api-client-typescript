import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for updating an environment.
 */
export class UpdateEnvironmentAttributes {
  /**
   * Indicates whether this is a production environment.
   */
  "isProduction"?: boolean;
  /**
   * The name of the environment.
   */
  "name"?: string;
  /**
   * List of queries to define the environment scope.
   */
  "queries"?: Array<string>;
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
