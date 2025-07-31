import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfigCatCredentialsUpdate } from "./ConfigCatCredentialsUpdate";
import { ConfigCatIntegrationType } from "./ConfigCatIntegrationType";

/**
 * The definition of the `ConfigCatIntegrationUpdate` object.
 */
export class ConfigCatIntegrationUpdate {
  /**
   * The definition of the `ConfigCatCredentialsUpdate` object.
   */
  "credentials"?: ConfigCatCredentialsUpdate;
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
      type: "ConfigCatCredentialsUpdate",
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
    return ConfigCatIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
