/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventEmailAddressData } from "./EventEmailAddressData";
import { EventEmailAddressIncludedUser } from "./EventEmailAddressIncludedUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
