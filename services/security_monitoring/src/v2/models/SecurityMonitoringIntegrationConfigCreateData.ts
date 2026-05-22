import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationConfigCreateAttributes } from "./SecurityMonitoringIntegrationConfigCreateAttributes";
import { SecurityMonitoringIntegrationConfigResourceType } from "./SecurityMonitoringIntegrationConfigResourceType";

/**
 * The entity context sync configuration to create.
 */
export class SecurityMonitoringIntegrationConfigCreateData {
  /**
   * The attributes of the entity context sync configuration to create.
   */
  "attributes": SecurityMonitoringIntegrationConfigCreateAttributes;
  /**
   * The type of the resource. The value should always be `integration_config`.
   */
  "type": SecurityMonitoringIntegrationConfigResourceType;
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
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringIntegrationConfigCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringIntegrationConfigResourceType",
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
    return SecurityMonitoringIntegrationConfigCreateData.attributeTypeMap;
  }

  public constructor() {}
}
