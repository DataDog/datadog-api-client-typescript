import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventEmailAddressUpdateData } from "./EventEmailAddressUpdateData";

/**
 * Request body for updating an event email address.
 */
export class EventEmailAddressUpdateRequest {
  /**
   * Data for updating an event email address.
   */
  "data": EventEmailAddressUpdateData;
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
      type: "EventEmailAddressUpdateData",
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
    return EventEmailAddressUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
