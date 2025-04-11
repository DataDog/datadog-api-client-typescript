import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfluentResourceResponseData } from "./ConfluentResourceResponseData";

/**
 * Response schema when interacting with a Confluent resource.
 */
export class ConfluentResourceResponse {
  /**
   * Confluent Cloud resource data.
   */
  "data"?: ConfluentResourceResponseData;
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
    data: {
      baseName: "data",
      type: "ConfluentResourceResponseData",
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
    return ConfluentResourceResponse.attributeTypeMap;
  }

  public constructor() {}
}
