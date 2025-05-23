/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventCreateResponseAttributesAttributes } from "./EventCreateResponseAttributesAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON object containing all events attributes and their associated values.
 */
export class EventCreateResponseAttributes {
  /**
   * JSON object of attributes from your events.
   */
  "attributes"?: EventCreateResponseAttributesAttributes;

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
      type: "EventCreateResponseAttributesAttributes",
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
    return EventCreateResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
