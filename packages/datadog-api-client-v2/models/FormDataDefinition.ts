/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormDataDefinitionType } from "./FormDataDefinitionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A JSON Schema definition that describes the form's data fields.
 */
export class FormDataDefinition {
  /**
   * A description shown to form respondents.
   */
  "description"?: string;
  /**
   * A map of field names to their JSON Schema definitions.
   */
  "properties"?: { [key: string]: any };
  /**
   * List of field names that must be answered.
   */
  "required"?: Array<string>;
  /**
   * The title of the form schema.
   */
  "title"?: string;
  /**
   * The root schema type.
   */
  "type"?: FormDataDefinitionType;

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
    description: {
      baseName: "description",
      type: "string",
    },
    properties: {
      baseName: "properties",
      type: "{ [key: string]: any; }",
    },
    required: {
      baseName: "required",
      type: "Array<string>",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FormDataDefinitionType",
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
    return FormDataDefinition.attributeTypeMap;
  }

  public constructor() {}
}
