import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatadogCredentialsUpdate } from "./DatadogCredentialsUpdate";
import { DatadogIntegrationType } from "./DatadogIntegrationType";

/**
 * The definition of the `DatadogIntegrationUpdate` object.
 */
export class DatadogIntegrationUpdate {
  /**
   * The definition of the `DatadogCredentialsUpdate` object.
   */
  "credentials"?: DatadogCredentialsUpdate;
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
      type: "DatadogCredentialsUpdate",
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
    return DatadogIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
