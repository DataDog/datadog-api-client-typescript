import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventEmailAddressData } from "./EventEmailAddressData";
import { EventEmailAddressIncludedUser } from "./EventEmailAddressIncludedUser";

/**
 * Response containing a list of event email addresses.
 */
export class EventEmailAddressesResponse {
  /**
   * A list of event email address resources.
   */
  "data": Array<EventEmailAddressData>;
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
      type: "Array<EventEmailAddressData>",
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
    return EventEmailAddressesResponse.attributeTypeMap;
  }

  public constructor() {}
}
