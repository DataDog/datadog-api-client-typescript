import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotionCredentials } from "./NotionCredentials";
import { NotionIntegrationType } from "./NotionIntegrationType";

/**
 * The definition of the `NotionIntegration` object.
 */
export class NotionIntegration {
  /**
   * The definition of the `NotionCredentials` object.
   */
  "credentials": NotionCredentials;
  /**
   * The definition of the `NotionIntegrationType` object.
   */
  "type": NotionIntegrationType;
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
      type: "NotionCredentials",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotionIntegrationType",
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
    return NotionIntegration.attributeTypeMap;
  }

  public constructor() {}
}
