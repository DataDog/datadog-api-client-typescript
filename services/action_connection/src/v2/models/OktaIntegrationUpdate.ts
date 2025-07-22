import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OktaCredentialsUpdate } from "./OktaCredentialsUpdate";
import { OktaIntegrationType } from "./OktaIntegrationType";

/**
 * The definition of the `OktaIntegrationUpdate` object.
 */
export class OktaIntegrationUpdate {
  /**
   * The definition of the `OktaCredentialsUpdate` object.
   */
  "credentials"?: OktaCredentialsUpdate;
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
      type: "OktaCredentialsUpdate",
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
    return OktaIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
