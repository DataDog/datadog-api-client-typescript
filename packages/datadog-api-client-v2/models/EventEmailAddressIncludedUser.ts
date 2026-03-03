/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventEmailAddressIncludedUserAttributes } from "./EventEmailAddressIncludedUserAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An included user resource in an event email address response.
 */
export class EventEmailAddressIncludedUser {
  /**
   * Attributes of an included user resource.
   */
  "attributes": EventEmailAddressIncludedUserAttributes;
  /**
   * The UUID of the user.
   */
  "id": string;
  /**
   * The type of the resource.
   */
  "type": string;

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
      type: "EventEmailAddressIncludedUserAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return EventEmailAddressIncludedUser.attributeTypeMap;
  }

  public constructor() {}
}
