import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GreyNoiseCredentials } from "./GreyNoiseCredentials";
import { GreyNoiseIntegrationType } from "./GreyNoiseIntegrationType";

/**
 * The definition of the `GreyNoiseIntegration` object.
 */
export class GreyNoiseIntegration {
  /**
   * The definition of the `GreyNoiseCredentials` object.
   */
  "credentials": GreyNoiseCredentials;
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
      type: "GreyNoiseCredentials",
      required: true,
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
    return GreyNoiseIntegration.attributeTypeMap;
  }

  public constructor() {}
}
