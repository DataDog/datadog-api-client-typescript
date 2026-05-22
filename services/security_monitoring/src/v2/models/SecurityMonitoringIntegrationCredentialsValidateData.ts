import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationConfigResourceType } from "./SecurityMonitoringIntegrationConfigResourceType";
import { SecurityMonitoringIntegrationCredentialsValidateAttributes } from "./SecurityMonitoringIntegrationCredentialsValidateAttributes";

/**
 * The credentials to validate.
 */
export class SecurityMonitoringIntegrationCredentialsValidateData {
  /**
   * The credentials to validate against the external entity source.
   */
  "attributes": SecurityMonitoringIntegrationCredentialsValidateAttributes;
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
      type: "SecurityMonitoringIntegrationCredentialsValidateAttributes",
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
    return SecurityMonitoringIntegrationCredentialsValidateData.attributeTypeMap;
  }

  public constructor() {}
}
