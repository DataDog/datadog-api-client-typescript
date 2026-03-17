/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details of a single entity attribute including its mapping configuration and metadata.
 */
export class GetMappingResponseDataAttributesAttributesItems {
  /**
   * The attribute identifier as used in the entity data model.
   */
  "attribute"?: string;
  /**
   * Human-readable explanation of what the attribute represents.
   */
  "description"?: string;
  /**
   * The human-readable label for the attribute shown in the UI.
   */
  "displayName"?: string;
  /**
   * List of group labels used to categorize the attribute.
   */
  "groups"?: Array<string>;
  /**
   * Whether this attribute is a custom user-defined attribute rather than a built-in one.
   */
  "isCustom"?: boolean;
  /**
   * The data type of the attribute (for example, string or number).
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
    attribute: {
      baseName: "attribute",
      type: "string",
    },
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
    isCustom: {
      baseName: "is_custom",
      type: "boolean",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return GetMappingResponseDataAttributesAttributesItems.attributeTypeMap;
  }

  public constructor() {}
}
