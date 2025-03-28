/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { InputSchemaParametersType } from "./InputSchemaParametersType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `InputSchemaParameters` object.
 */
export class InputSchemaParameters {
  /**
   * The `InputSchemaParameters` `defaultValue`.
   */
  "defaultValue"?: any;
  /**
   * The `InputSchemaParameters` `description`.
   */
  "description"?: string;
  /**
   * The `InputSchemaParameters` `label`.
   */
  "label"?: string;
  /**
   * The `InputSchemaParameters` `name`.
   */
  "name": string;
  /**
   * The definition of `InputSchemaParametersType` object.
   */
  "type": InputSchemaParametersType;

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
    label: {
      baseName: "label",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "InputSchemaParametersType",
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
    return InputSchemaParameters.attributeTypeMap;
  }

  public constructor() {}
}
