import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAFailureType } from "./DORAFailureType";

/**
 * Response after receiving a DORA failure event.
 */
export class DORAFailureResponseData {
  /**
   * The ID of the received DORA failure event.
   */
  "id": string;
  /**
   * JSON:API type for DORA failure events.
   */
  "type"?: DORAFailureType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DORAFailureType",
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
    return DORAFailureResponseData.attributeTypeMap;
  }

  public constructor() {}
}
