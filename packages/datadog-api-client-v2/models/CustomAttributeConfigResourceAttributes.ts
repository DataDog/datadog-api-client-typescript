/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomAttributeType } from "./CustomAttributeType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a custom attribute configuration, defining an organization-specific metadata field that can be added to cases of a given type.
 */
export class CustomAttributeConfigResourceAttributes {
  /**
   * The UUID of the case type this custom attribute belongs to.
   */
  "caseTypeId": string;
  /**
   * A description explaining the purpose and expected values for this custom attribute.
   */
  "description"?: string;
  /**
   * The human-readable label shown in the Case Management UI for this custom attribute.
   */
  "displayName": string;
  /**
   * If `true`, this attribute accepts an array of values. If `false`, only a single value is allowed.
   */
  "isMulti": boolean;
  /**
   * The programmatic key used to reference this custom attribute in search queries and API calls.
   */
  "key": string;
  /**
   * The data type of the custom attribute, which determines the allowed values and UI input control.
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
