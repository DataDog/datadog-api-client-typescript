/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { InputSchemaDataAttributesParametersItems } from "./InputSchemaDataAttributesParametersItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `InputSchemaDataAttributes` object.
 */
export class InputSchemaDataAttributes {
  /**
   * The `attributes` `parameters`.
   */
  "parameters"?: Array<InputSchemaDataAttributesParametersItems>;

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
    parameters: {
      baseName: "parameters",
      type: "Array<InputSchemaDataAttributesParametersItems>",
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
    return InputSchemaDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
