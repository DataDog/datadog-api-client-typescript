import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventEmailAddressCreateData } from "./EventEmailAddressCreateData";

/**
 * Request body for creating an event email address.
 */
export class EventEmailAddressCreateRequest {
  /**
   * Data for creating an event email address.
   */
  "data": EventEmailAddressCreateData;
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
      type: "EventEmailAddressCreateData",
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
    return EventEmailAddressCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
