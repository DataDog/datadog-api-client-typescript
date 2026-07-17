import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringIntegrationTypeEntraId } from "./SecurityMonitoringIntegrationTypeEntraId";

/**
 * The Entra ID credentials to validate against the external entity source.
 */
export class SecurityMonitoringEntraIdIntegrationCredentialsValidateAttributes {
  /**
   * The domain associated with the external entity source.
   */
  "domain": string;
  /**
   * The source type for an Entra ID entity context sync.
   */
  "integrationType": SecurityMonitoringIntegrationTypeEntraId;
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
    domain: {
      baseName: "domain",
      type: "string",
      required: true,
    },
    integrationType: {
      baseName: "integration_type",
      type: "SecurityMonitoringIntegrationTypeEntraId",
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
    return SecurityMonitoringEntraIdIntegrationCredentialsValidateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
