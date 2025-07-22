import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceNowCredentials } from "./ServiceNowCredentials";
import { ServiceNowIntegrationType } from "./ServiceNowIntegrationType";

/**
 * The definition of the `ServiceNowIntegration` object.
 */
export class ServiceNowIntegration {
  /**
   * The definition of the `ServiceNowCredentials` object.
   */
  "credentials": ServiceNowCredentials;
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
      type: "ServiceNowCredentials",
      required: true,
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
    return ServiceNowIntegration.attributeTypeMap;
  }

  public constructor() {}
}
