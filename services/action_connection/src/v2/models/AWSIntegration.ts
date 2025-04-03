import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSCredentials } from "./AWSCredentials";
import { AWSIntegrationType } from "./AWSIntegrationType";

/**
 * The definition of `AWSIntegration` object.
 */
export class AWSIntegration {
  /**
   * The definition of `AWSCredentials` object.
   */
  "credentials": AWSCredentials;
  /**
   * The definition of `AWSIntegrationType` object.
   */
  "type": AWSIntegrationType;
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
      type: "AWSCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AWSIntegrationType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AWSIntegration.attributeTypeMap;
  }

  public constructor() {}
}
