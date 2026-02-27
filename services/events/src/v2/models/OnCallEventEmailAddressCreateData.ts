import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventEmailAddressResourceType } from "./EventEmailAddressResourceType";
import { OnCallEventEmailAddressCreateAttributes } from "./OnCallEventEmailAddressCreateAttributes";

/**
 * Data for creating an on-call event email address.
 */
export class OnCallEventEmailAddressCreateData {
  /**
   * Attributes for creating an on-call event email address.
   */
  "attributes": OnCallEventEmailAddressCreateAttributes;
  /**
   * The type of the resource. Must be `event_emails`.
   */
  "type"?: EventEmailAddressResourceType;
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
    attributes: {
      baseName: "attributes",
      type: "OnCallEventEmailAddressCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "EventEmailAddressResourceType",
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
    return OnCallEventEmailAddressCreateData.attributeTypeMap;
  }

  public constructor() {}
}
