import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AzureCredentialsUpdate } from "./AzureCredentialsUpdate";
import { AzureIntegrationType } from "./AzureIntegrationType";

/**
 * The definition of the `AzureIntegrationUpdate` object.
 */
export class AzureIntegrationUpdate {
  /**
   * The definition of the `AzureCredentialsUpdate` object.
   */
  "credentials"?: AzureCredentialsUpdate;
  /**
   * The definition of the `AzureIntegrationType` object.
   */
  "type": AzureIntegrationType;
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
      type: "AzureCredentialsUpdate",
    },
    type: {
      baseName: "type",
      type: "AzureIntegrationType",
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
    return AzureIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
