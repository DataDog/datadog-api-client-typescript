import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatadogCredentials } from "./DatadogCredentials";
import { DatadogIntegrationType } from "./DatadogIntegrationType";

/**
 * The definition of the `DatadogIntegration` object.
 */
export class DatadogIntegration {
  /**
   * The definition of the `DatadogCredentials` object.
   */
  "credentials": DatadogCredentials;
  /**
   * The definition of the `DatadogIntegrationType` object.
   */
  "type": DatadogIntegrationType;
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
      type: "DatadogCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DatadogIntegrationType",
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
    return DatadogIntegration.attributeTypeMap;
  }

  public constructor() {}
}
