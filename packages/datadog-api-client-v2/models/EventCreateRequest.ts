/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventCreateRequestType } from "./EventCreateRequestType";
import { EventPayload } from "./EventPayload";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An event object.
 */
export class EventCreateRequest {
  /**
   * Event attributes.
   */
  "attributes": EventPayload;
  /**
   * Entity type.
   */
  "type": EventCreateRequestType;

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
      type: "EventPayload",
      required: true,
    },
    type: {
      baseName: "type",
      type: "EventCreateRequestType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
