import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LaunchDarklyCredentialsUpdate } from "./LaunchDarklyCredentialsUpdate";
import { LaunchDarklyIntegrationType } from "./LaunchDarklyIntegrationType";

/**
 * The definition of the `LaunchDarklyIntegrationUpdate` object.
 */
export class LaunchDarklyIntegrationUpdate {
  /**
   * The definition of the `LaunchDarklyCredentialsUpdate` object.
   */
  "credentials"?: LaunchDarklyCredentialsUpdate;
  /**
   * The definition of the `LaunchDarklyIntegrationType` object.
   */
  "type": LaunchDarklyIntegrationType;
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
      type: "LaunchDarklyCredentialsUpdate",
    },
    type: {
      baseName: "type",
      type: "LaunchDarklyIntegrationType",
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
    return LaunchDarklyIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
