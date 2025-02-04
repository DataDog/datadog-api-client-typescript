/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ActionConnectionAttributesUpdate } from "./ActionConnectionAttributesUpdate";
import { ActionConnectionDataType } from "./ActionConnectionDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data related to the connection update.
 */
export class ActionConnectionDataUpdate {
  /**
   * The definition of `ActionConnectionAttributesUpdate` object.
   */
  "attributes": ActionConnectionAttributesUpdate;
  /**
   * The definition of `ActionConnectionDataType` object.
   */
  "type": ActionConnectionDataType;

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
      type: "ActionConnectionAttributesUpdate",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ActionConnectionDataType",
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
    return ActionConnectionDataUpdate.attributeTypeMap;
  }

  public constructor() {}
}
