import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CircleCIAPIKeyType } from "./CircleCIAPIKeyType";

/**
 * The definition of the `CircleCIAPIKey` object.
 */
export class CircleCIAPIKeyUpdate {
  /**
   * The `CircleCIAPIKeyUpdate` `api_token`.
   */
  "apiToken"?: string;
  /**
   * The definition of the `CircleCIAPIKey` object.
   */
  "type": CircleCIAPIKeyType;
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
    apiToken: {
      baseName: "api_token",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CircleCIAPIKeyType",
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
    return CircleCIAPIKeyUpdate.attributeTypeMap;
  }

  public constructor() {}
}
