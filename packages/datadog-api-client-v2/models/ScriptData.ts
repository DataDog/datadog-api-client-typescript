/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScriptDataAttributes } from "./ScriptDataAttributes";
import { ScriptDataType } from "./ScriptDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `ScriptData` object.
 */
export class ScriptData {
  /**
   * The definition of `ScriptDataAttributes` object.
   */
  "attributes"?: ScriptDataAttributes;
  /**
   * The `data` `id`.
   */
  "id"?: string;
  /**
   * The definition of `ScriptDataType` object.
   */
  "type"?: ScriptDataType;

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
      type: "ScriptDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ScriptDataType",
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
    return ScriptData.attributeTypeMap;
  }

  public constructor() {}
}
