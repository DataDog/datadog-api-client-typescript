import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes used to create or update an entity integration configuration.
 */
export class EntityIntegrationConfigRequestAttributes {
  /**
   * Integration-specific configuration payload. The shape of this object depends on the integration identified by the path parameter. For `github`, the object must contain an `enabled_repos` array. For `jira`, it must contain an `enabled_projects` array. For `pagerduty`, it must contain an `accounts` array.
   */
  "config": { [key: string]: any };
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
    config: {
      baseName: "config",
      type: "{ [key: string]: any; }",
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
    return EntityIntegrationConfigRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
