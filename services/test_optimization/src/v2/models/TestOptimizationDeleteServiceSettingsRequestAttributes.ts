import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for deleting Test Optimization service settings.
 */
export class TestOptimizationDeleteServiceSettingsRequestAttributes {
  /**
   * The environment name. If omitted, defaults to `none`.
   */
  "env"?: string;
  /**
   * The repository identifier.
   */
  "repositoryId": string;
  /**
   * The service name.
   */
  "serviceName": string;
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
    env: {
      baseName: "env",
      type: "string",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TestOptimizationDeleteServiceSettingsRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
