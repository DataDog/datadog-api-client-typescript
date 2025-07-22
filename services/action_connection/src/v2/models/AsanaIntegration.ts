import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AsanaCredentials } from "./AsanaCredentials";
import { AsanaIntegrationType } from "./AsanaIntegrationType";

/**
 * The definition of the `AsanaIntegration` object.
 */
export class AsanaIntegration {
  /**
   * The definition of the `AsanaCredentials` object.
   */
  "credentials": AsanaCredentials;
  /**
   * The definition of the `AsanaIntegrationType` object.
   */
  "type": AsanaIntegrationType;
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
      type: "AsanaCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AsanaIntegrationType",
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
    return AsanaIntegration.attributeTypeMap;
  }

  public constructor() {}
}
