/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventEmailAddressCreateAttributes } from "./EventEmailAddressCreateAttributes";
import { EventEmailAddressResourceType } from "./EventEmailAddressResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for creating an event email address.
 */
export class EventEmailAddressCreateData {
  /**
   * Attributes for creating an event email address.
   */
  "attributes": EventEmailAddressCreateAttributes;
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
      type: "EventEmailAddressCreateAttributes",
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
    return EventEmailAddressCreateData.attributeTypeMap;
  }

  public constructor() {}
}
