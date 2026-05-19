/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomAttributeType } from "./CustomAttributeType";
import { CustomAttributeTypeData } from "./CustomAttributeTypeData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes that can be updated on a custom attribute configuration. All fields are optional; only provided fields are changed.
 */
export class CustomAttributeConfigUpdateAttributes {
  /**
   * A description explaining the purpose and expected values for this custom attribute.
   */
  "description"?: string;
  /**
   * The human-readable label shown in the Case Management UI for this custom attribute.
   */
  "displayName"?: string;
  /**
   * An external field identifier to auto-populate this attribute from (used for integrations with external systems).
   */
  "mapFrom"?: string;
  /**
   * The data type of the custom attribute, which determines the allowed values and UI input control.
   */
  "type"?: CustomAttributeType;
  /**
   * Type-specific configuration for the custom attribute. For SELECT-type attributes, this contains the list of allowed options.
   */
  "typeData"?: CustomAttributeTypeData;

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
    mapFrom: {
      baseName: "map_from",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CustomAttributeType",
    },
    typeData: {
      baseName: "type_data",
      type: "CustomAttributeTypeData",
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
    return CustomAttributeConfigUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
