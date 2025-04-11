import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfluentResourceRequestData } from "./ConfluentResourceRequestData";

/**
 * The JSON:API request for updating a Confluent resource.
 */
export class ConfluentResourceRequest {
  /**
   * JSON:API request for updating a Confluent resource.
   */
  "data": ConfluentResourceRequestData;
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
      type: "ConfluentResourceRequestData",
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
    return ConfluentResourceRequest.attributeTypeMap;
  }

  public constructor() {}
}
