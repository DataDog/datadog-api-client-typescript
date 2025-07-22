import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AzureCredentials } from "./AzureCredentials";
import { AzureIntegrationType } from "./AzureIntegrationType";

/**
 * The definition of the `AzureIntegration` object.
 */
export class AzureIntegration {
  /**
   * The definition of the `AzureCredentials` object.
   */
  "credentials": AzureCredentials;
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
      type: "AzureCredentials",
      required: true,
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
    return AzureIntegration.attributeTypeMap;
  }

  public constructor() {}
}
