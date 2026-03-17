/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Specification for updating an existing field in a connection, including which field to modify and the new values.
 */
export class UpdateConnectionRequestDataAttributesFieldsToUpdateItems {
  /**
   * The identifier of the existing field to update.
   */
  "fieldId": string;
  /**
   * The new description to set for the field.
   */
  "updatedDescription"?: string;
  /**
   * The new human-readable display name to set for the field.
   */
  "updatedDisplayName"?: string;
  /**
   * The new identifier to assign to the field, if renaming it.
   */
  "updatedFieldId"?: string;
  /**
   * The updated list of group labels to associate with the field.
   */
  "updatedGroups"?: Array<string>;

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
    fieldId: {
      baseName: "field_id",
      type: "string",
      required: true,
    },
    updatedDescription: {
      baseName: "updated_description",
      type: "string",
    },
    updatedDisplayName: {
      baseName: "updated_display_name",
      type: "string",
    },
    updatedFieldId: {
      baseName: "updated_field_id",
      type: "string",
    },
    updatedGroups: {
      baseName: "updated_groups",
      type: "Array<string>",
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
    return UpdateConnectionRequestDataAttributesFieldsToUpdateItems.attributeTypeMap;
  }

  public constructor() {}
}
