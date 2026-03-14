/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Definition of a custom attribute field to import from a data source connection.
 */
export class CreateConnectionRequestDataAttributesFieldsItems {
  /**
   * Human-readable explanation of what the field represents.
   */
  "description"?: string;
  /**
   * The human-readable label for the field shown in the UI.
   */
  "displayName"?: string;
  /**
   * List of group labels used to categorize the field.
   */
  "groups"?: Array<string>;
  /**
   * The unique identifier for the field within the connection.
   */
  "id": string;
  /**
   * The name of the column or attribute in the source data system that maps to this field.
   */
  "sourceName": string;
  /**
   * The data type of the field (for example, string or number).
   */
  "type": string;

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
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    groups: {
      baseName: "groups",
      type: "Array<string>",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    sourceName: {
      baseName: "source_name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
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
    return CreateConnectionRequestDataAttributesFieldsItems.attributeTypeMap;
  }

  public constructor() {}
}
