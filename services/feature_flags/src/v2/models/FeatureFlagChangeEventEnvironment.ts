import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The environment the change applies to. Null for a change to the flag itself rather than to one environment.
 */
export class FeatureFlagChangeEventEnvironment {
  /**
   * The ID of the environment.
   */
  "id": string;
  /**
   * Whether the environment is a production environment.
   */
  "isProduction": boolean;
  /**
   * The name of the environment.
   */
  "name": string;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    isProduction: {
      baseName: "is_production",
      type: "boolean",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
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
    return FeatureFlagChangeEventEnvironment.attributeTypeMap;
  }

  public constructor() {}
}
