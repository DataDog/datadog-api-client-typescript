import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { VirusTotalCredentialsUpdate } from "./VirusTotalCredentialsUpdate";
import { VirusTotalIntegrationType } from "./VirusTotalIntegrationType";

/**
 * The definition of the `VirusTotalIntegrationUpdate` object.
 */
export class VirusTotalIntegrationUpdate {
  /**
   * The definition of the `VirusTotalCredentialsUpdate` object.
   */
  "credentials"?: VirusTotalCredentialsUpdate;
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
      type: "VirusTotalCredentialsUpdate",
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
    return VirusTotalIntegrationUpdate.attributeTypeMap;
  }

  public constructor() {}
}
