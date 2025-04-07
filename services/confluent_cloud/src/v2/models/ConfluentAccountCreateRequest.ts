import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfluentAccountCreateRequestData } from "./ConfluentAccountCreateRequestData";

/**
 * Payload schema when adding a Confluent account.
 */
export class ConfluentAccountCreateRequest {
  /**
   * The data body for adding a Confluent account.
   */
  "data": ConfluentAccountCreateRequestData;
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
      type: "ConfluentAccountCreateRequestData",
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
    return ConfluentAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
