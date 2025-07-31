import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ClickupCredentialsUpdate } from "./ClickupCredentialsUpdate";
import { ClickupIntegrationType } from "./ClickupIntegrationType";

/**
 * The definition of the `ClickupIntegrationUpdate` object.
 */
export class ClickupIntegrationUpdate {
  /**
   * The definition of the `ClickupCredentialsUpdate` object.
   */
  "credentials"?: ClickupCredentialsUpdate;
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
      type: "ClickupCredentialsUpdate",
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
    return ClickupIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
