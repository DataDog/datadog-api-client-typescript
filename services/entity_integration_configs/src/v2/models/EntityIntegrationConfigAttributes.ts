import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The organization ID, integration identifier, and integration-specific configuration payload for an entity integration configuration.
 */
export class EntityIntegrationConfigAttributes {
  /**
   * Integration-specific configuration payload. The shape of this object depends on the integration identified by the path parameter. For `github`, the object must contain an `enabled_repos` array. For `jira`, it must contain an `enabled_projects` array. For `pagerduty`, it must contain an `accounts` array.
   */
  "config": { [key: string]: any };
  /**
   * The identifier of the integration this configuration applies to (for example, `github`, `jira`, or `pagerduty`).
   */
  "integrationId": string;
  /**
   * The Datadog organization identifier that owns this configuration.
   */
  "orgId": number;
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
    integrationId: {
      baseName: "integration_id",
      type: "string",
      required: true,
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      required: true,
      format: "int64",
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
    return EntityIntegrationConfigAttributes.attributeTypeMap;
  }

  public constructor() {}
}
