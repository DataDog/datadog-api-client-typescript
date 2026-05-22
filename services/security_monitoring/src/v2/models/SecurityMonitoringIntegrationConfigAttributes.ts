import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationConfigState } from "./SecurityMonitoringIntegrationConfigState";
import { SecurityMonitoringIntegrationType } from "./SecurityMonitoringIntegrationType";

/**
 * The attributes of an entity context sync configuration as returned by the API.
 */
export class SecurityMonitoringIntegrationConfigAttributes {
  /**
   * The time at which the entity context sync configuration was created.
   */
  "createdAt"?: Date;
  /**
   * The domain associated with the external entity source (for example, the customer's identity provider domain).
   */
  "domain": string;
  /**
   * Whether the sync is enabled and actively ingesting entities into Cloud SIEM.
   */
  "enabled": boolean;
  /**
   * The type of external source that provides entities to Cloud SIEM.
   */
  "integrationType": SecurityMonitoringIntegrationType;
  /**
   * The time at which the entity context sync configuration was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * The display name of the entity context sync configuration.
   */
  "name"?: string;
  /**
   * Free-form, non-sensitive settings for the entity context sync. The accepted keys depend on the source type.
   */
  "settings"?: { [key: string]: any };
  /**
   * The state of the credentials configured on the entity context sync.
   */
  "state"?: SecurityMonitoringIntegrationConfigState;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    domain: {
      baseName: "domain",
      type: "string",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    integrationType: {
      baseName: "integration_type",
      type: "SecurityMonitoringIntegrationType",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "{ [key: string]: any; }",
    },
    state: {
      baseName: "state",
      type: "SecurityMonitoringIntegrationConfigState",
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
    return SecurityMonitoringIntegrationConfigAttributes.attributeTypeMap;
  }

  public constructor() {}
}
