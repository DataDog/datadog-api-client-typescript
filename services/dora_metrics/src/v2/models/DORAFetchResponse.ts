import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAEvent } from "./DORAEvent";

/**
 * Response for the DORA fetch endpoints.
 */
export class DORAFetchResponse {
  /**
   * A DORA event.
   */
  "data"?: DORAEvent;
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
      type: "DORAEvent",
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
    return DORAFetchResponse.attributeTypeMap;
  }

  public constructor() {}
}
