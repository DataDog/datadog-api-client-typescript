import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GreyNoiseCredentialsUpdate } from "./GreyNoiseCredentialsUpdate";
import { GreyNoiseIntegrationType } from "./GreyNoiseIntegrationType";

/**
 * The definition of the `GreyNoiseIntegrationUpdate` object.
 */
export class GreyNoiseIntegrationUpdate {
  /**
   * The definition of the `GreyNoiseCredentialsUpdate` object.
   */
  "credentials"?: GreyNoiseCredentialsUpdate;
  /**
   * The definition of the `GreyNoiseIntegrationType` object.
   */
  "type": GreyNoiseIntegrationType;
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
      type: "GreyNoiseCredentialsUpdate",
    },
    type: {
      baseName: "type",
      type: "GreyNoiseIntegrationType",
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
    return GreyNoiseIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
