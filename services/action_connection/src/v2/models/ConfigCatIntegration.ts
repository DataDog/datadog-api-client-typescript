import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfigCatCredentials } from "./ConfigCatCredentials";
import { ConfigCatIntegrationType } from "./ConfigCatIntegrationType";

/**
 * The definition of the `ConfigCatIntegration` object.
 */
export class ConfigCatIntegration {
  /**
   * The definition of the `ConfigCatCredentials` object.
   */
  "credentials": ConfigCatCredentials;
  /**
   * The definition of the `ConfigCatIntegrationType` object.
   */
  "type": ConfigCatIntegrationType;
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
      type: "ConfigCatCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ConfigCatIntegrationType",
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
    return ConfigCatIntegration.attributeTypeMap;
  }

  public constructor() {}
}
