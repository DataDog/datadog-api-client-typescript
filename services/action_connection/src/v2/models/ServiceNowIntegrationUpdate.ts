import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowCredentialsUpdate } from "./ServiceNowCredentialsUpdate";
import { ServiceNowIntegrationType } from "./ServiceNowIntegrationType";

/**
 * The definition of the `ServiceNowIntegrationUpdate` object.
 */
export class ServiceNowIntegrationUpdate {
  /**
   * The definition of the `ServiceNowCredentialsUpdate` object.
   */
  "credentials"?: ServiceNowCredentialsUpdate;
  /**
   * The definition of the `ServiceNowIntegrationType` object.
   */
  "type": ServiceNowIntegrationType;
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
    credentials: {
      baseName: "credentials",
      type: "ServiceNowCredentialsUpdate",
    },
    type: {
      baseName: "type",
      type: "ServiceNowIntegrationType",
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
    return ServiceNowIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
