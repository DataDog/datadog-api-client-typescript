import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FastlyCredentialsUpdate } from "./FastlyCredentialsUpdate";
import { FastlyIntegrationType } from "./FastlyIntegrationType";

/**
 * The definition of the `FastlyIntegrationUpdate` object.
 */
export class FastlyIntegrationUpdate {
  /**
   * The definition of the `FastlyCredentialsUpdate` object.
   */
  "credentials"?: FastlyCredentialsUpdate;
  /**
   * The definition of the `FastlyIntegrationType` object.
   */
  "type": FastlyIntegrationType;
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
      type: "FastlyCredentialsUpdate",
    },
    type: {
      baseName: "type",
      type: "FastlyIntegrationType",
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
    return FastlyIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
