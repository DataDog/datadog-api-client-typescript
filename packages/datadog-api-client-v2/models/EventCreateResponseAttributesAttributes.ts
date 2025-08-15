/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventCreateResponseAttributesAttributesEvt } from "./EventCreateResponseAttributesAttributesEvt";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON object for category-specific attributes.
 */
export class EventCreateResponseAttributesAttributes {
  /**
   * JSON object of event system attributes.
   */
  "evt"?: EventCreateResponseAttributesAttributesEvt;

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
    evt: {
      baseName: "evt",
      type: "EventCreateResponseAttributesAttributesEvt",
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
    return EventCreateResponseAttributesAttributes.attributeTypeMap;
  }

  public constructor() {}
}
