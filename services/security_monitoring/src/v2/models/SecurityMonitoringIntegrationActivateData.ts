import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationActivateAttributes } from "./SecurityMonitoringIntegrationActivateAttributes";
import { SecurityMonitoringIntegrationActivateResourceType } from "./SecurityMonitoringIntegrationActivateResourceType";

/**
 * The configuration overrides for the integration to activate.
 */
export class SecurityMonitoringIntegrationActivateData {
  /**
   * Overrides applied when activating the integration. All fields are optional.
   */
  "attributes"?: SecurityMonitoringIntegrationActivateAttributes;
  /**
   * The type of the resource. The value should always be `activate_entra_id_request`.
   */
  "type"?: SecurityMonitoringIntegrationActivateResourceType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "SecurityMonitoringIntegrationActivateAttributes",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringIntegrationActivateResourceType",
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
    return SecurityMonitoringIntegrationActivateData.attributeTypeMap;
  }

  public constructor() {}
}
