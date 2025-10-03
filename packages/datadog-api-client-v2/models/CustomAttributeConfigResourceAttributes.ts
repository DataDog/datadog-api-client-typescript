/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomAttributeType } from "./CustomAttributeType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Custom attribute resource attributes
 */
export class CustomAttributeConfigResourceAttributes {
  /**
   * Custom attribute config identifier.
   */
  "caseTypeId": string;
  /**
   * Custom attribute description.
   */
  "description"?: string;
  /**
   * Custom attribute name.
   */
  "displayName": string;
  /**
   * Whether multiple values can be set
   */
  "isMulti": boolean;
  /**
   * Custom attribute key. This will be the value use to search on this custom attribute
   */
  "key": string;
  /**
   * Custom attributes type
   */
  "type": CustomAttributeType;

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
    caseTypeId: {
      baseName: "case_type_id",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    displayName: {
      baseName: "display_name",
      type: "string",
      required: true,
    },
    isMulti: {
      baseName: "is_multi",
      type: "boolean",
      required: true,
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomAttributeType",
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
    return CustomAttributeConfigResourceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
