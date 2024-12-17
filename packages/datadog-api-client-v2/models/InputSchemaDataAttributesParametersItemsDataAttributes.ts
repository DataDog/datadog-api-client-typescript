/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `InputSchemaDataAttributesParametersItemsDataAttributes` object.
 */
export class InputSchemaDataAttributesParametersItemsDataAttributes {
  /**
   * The `attributes` `defaultValue`.
   */
  "defaultValue"?: any;
  /**
   * The `attributes` `description`.
   */
  "description"?: string;
  /**
   * The `attributes` `enum`.
   */
  "_enum"?: Array<string>;
  /**
   * The `attributes` `label`.
   */
  "label"?: string;
  /**
   * The `attributes` `name`.
   */
  "name"?: string;
  /**
   * The `attributes` `type`.
   */
  "type"?: string;

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
    defaultValue: {
      baseName: "defaultValue",
      type: "any",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    _enum: {
      baseName: "enum",
      type: "Array<string>",
    },
    label: {
      baseName: "label",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return InputSchemaDataAttributesParametersItemsDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
