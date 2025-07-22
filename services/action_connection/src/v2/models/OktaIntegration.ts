import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OktaCredentials } from "./OktaCredentials";
import { OktaIntegrationType } from "./OktaIntegrationType";

/**
 * The definition of the `OktaIntegration` object.
 */
export class OktaIntegration {
  /**
   * The definition of the `OktaCredentials` object.
   */
  "credentials": OktaCredentials;
  /**
   * The definition of the `OktaIntegrationType` object.
   */
  "type": OktaIntegrationType;
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
      type: "OktaCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OktaIntegrationType",
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
    return OktaIntegration.attributeTypeMap;
  }

  public constructor() {}
}
