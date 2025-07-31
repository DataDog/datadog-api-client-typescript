import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { VirusTotalCredentials } from "./VirusTotalCredentials";
import { VirusTotalIntegrationType } from "./VirusTotalIntegrationType";

/**
 * The definition of the `VirusTotalIntegration` object.
 */
export class VirusTotalIntegration {
  /**
   * The definition of the `VirusTotalCredentials` object.
   */
  "credentials": VirusTotalCredentials;
  /**
   * The definition of the `VirusTotalIntegrationType` object.
   */
  "type": VirusTotalIntegrationType;
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
      type: "VirusTotalCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "VirusTotalIntegrationType",
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
    return VirusTotalIntegration.attributeTypeMap;
  }

  public constructor() {}
}
