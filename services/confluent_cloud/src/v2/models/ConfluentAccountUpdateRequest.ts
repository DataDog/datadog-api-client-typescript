import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfluentAccountUpdateRequestData } from "./ConfluentAccountUpdateRequestData";

/**
 * The JSON:API request for updating a Confluent account.
 */
export class ConfluentAccountUpdateRequest {
  /**
   * Data object for updating a Confluent account.
   */
  "data": ConfluentAccountUpdateRequestData;
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
      type: "ConfluentAccountUpdateRequestData",
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
    return ConfluentAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
