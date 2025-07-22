import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { VirusTotalAPIKeyType } from "./VirusTotalAPIKeyType";

/**
 * The definition of the `VirusTotalAPIKey` object.
 */
export class VirusTotalAPIKey {
  /**
   * The `VirusTotalAPIKey` `api_key`.
   */
  "apiKey": string;
  /**
   * The definition of the `VirusTotalAPIKey` object.
   */
  "type": VirusTotalAPIKeyType;
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
    apiKey: {
      baseName: "api_key",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "VirusTotalAPIKeyType",
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
    return VirusTotalAPIKey.attributeTypeMap;
  }

  public constructor() {}
}
