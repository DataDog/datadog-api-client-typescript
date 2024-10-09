/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeEvent } from "./ChangeEvent";
import { ChangeEventCreateRequestType } from "./ChangeEventCreateRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ChangeEventCreateRequest` object.
 */
export class ChangeEventCreateRequest {
  /**
   * Object representing a change event.
   */
  "attributes"?: ChangeEvent;
  /**
   * Event type
   */
  "type"?: ChangeEventCreateRequestType;

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
      type: "ChangeEvent",
    },
    type: {
      baseName: "type",
      type: "ChangeEventCreateRequestType",
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
    return ChangeEventCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
