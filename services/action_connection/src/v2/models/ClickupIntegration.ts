import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ClickupCredentials } from "./ClickupCredentials";
import { ClickupIntegrationType } from "./ClickupIntegrationType";

/**
 * The definition of the `ClickupIntegration` object.
 */
export class ClickupIntegration {
  /**
   * The definition of the `ClickupCredentials` object.
   */
  "credentials": ClickupCredentials;
  /**
   * The definition of the `ClickupIntegrationType` object.
   */
  "type": ClickupIntegrationType;
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
      type: "ClickupCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ClickupIntegrationType",
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
    return ClickupIntegration.attributeTypeMap;
  }

  public constructor() {}
}
