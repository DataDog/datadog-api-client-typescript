/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OutputSchemaParametersType } from "./OutputSchemaParametersType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `OutputSchemaParameters` object.
 */
export class OutputSchemaParameters {
  /**
   * The `OutputSchemaParameters` `defaultValue`.
   */
  "defaultValue"?: any;
  /**
   * The `OutputSchemaParameters` `description`.
   */
  "description"?: string;
  /**
   * The `OutputSchemaParameters` `label`.
   */
  "label"?: string;
  /**
   * The `OutputSchemaParameters` `name`.
   */
  "name": string;
  /**
   * The definition of `OutputSchemaParametersType` object.
   */
  "type": OutputSchemaParametersType;
  /**
   * The `OutputSchemaParameters` `value`.
   */
  "value"?: any;

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
      type: "OutputSchemaParametersType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "any",
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
    return OutputSchemaParameters.attributeTypeMap;
  }

  public constructor() {}
}
