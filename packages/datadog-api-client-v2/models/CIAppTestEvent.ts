/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppEventAttributes } from "./CIAppEventAttributes";
import { CIAppTestEventTypeName } from "./CIAppTestEventTypeName";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object description of test event after being processed and stored by Datadog.
 */
export class CIAppTestEvent {
  /**
   * JSON object containing all event attributes and their associated values.
   */
  "attributes"?: CIAppEventAttributes;
  /**
   * Unique ID of the event.
   */
  "id"?: string;
  /**
   * Type of the event.
   */
  "type"?: CIAppTestEventTypeName;

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
      type: "CIAppEventAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CIAppTestEventTypeName",
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
    return CIAppTestEvent.attributeTypeMap;
  }

  public constructor() {}
}
