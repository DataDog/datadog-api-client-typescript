import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventEmailAddressData } from "./EventEmailAddressData";
import { EventEmailAddressIncludedUser } from "./EventEmailAddressIncludedUser";

/**
 * Response containing a single event email address.
 */
export class EventEmailAddressSingleResponse {
  /**
   * A single event email address resource.
   */
  "data": EventEmailAddressData;
  /**
   * Related resources included in the response.
   */
  "included"?: Array<EventEmailAddressIncludedUser>;
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
      type: "EventEmailAddressData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<EventEmailAddressIncludedUser>",
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
    return EventEmailAddressSingleResponse.attributeTypeMap;
  }

  public constructor() {}
}
