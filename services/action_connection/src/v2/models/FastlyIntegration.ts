import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FastlyCredentials } from "./FastlyCredentials";
import { FastlyIntegrationType } from "./FastlyIntegrationType";

/**
 * The definition of the `FastlyIntegration` object.
 */
export class FastlyIntegration {
  /**
   * The definition of the `FastlyCredentials` object.
   */
  "credentials": FastlyCredentials;
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
      type: "FastlyCredentials",
      required: true,
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
    return FastlyIntegration.attributeTypeMap;
  }

  public constructor() {}
}
