/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentUserDefinedFieldCategory } from "./IncidentUserDefinedFieldCategory";
import { IncidentUserDefinedFieldCollected } from "./IncidentUserDefinedFieldCollected";
import { IncidentUserDefinedFieldValidValue } from "./IncidentUserDefinedFieldValidValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for updating an incident user-defined field. All fields are optional.
 */
export class IncidentUserDefinedFieldAttributesUpdateRequest {
  /**
   * The section in which the field appears. Use "what_happened" for impact-related fields or "why_it_happened" for root cause fields. When null, the field appears in the Attributes section.
   */
  "category"?: IncidentUserDefinedFieldCategory;
  /**
   * The lifecycle stage at which the app prompts users to fill out this field. Cannot be set on required fields.
   */
  "collected"?: IncidentUserDefinedFieldCollected;
  /**
   * The default value for the field. Must be one of the valid values when valid_values is set.
   */
  "defaultValue"?: string;
  /**
   * The human-readable name shown in the UI.
   */
  "displayName"?: string;
  /**
   * A decimal string representing the field's display order in the UI.
   */
  "ordinal"?: string;
  /**
   * When true, users must fill out this field on incidents.
   */
  "required"?: boolean;
  /**
   * The list of allowed values for dropdown and multiselect fields. Limited to 1000 values.
   */
  "validValues"?: Array<IncidentUserDefinedFieldValidValue>;

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
    category: {
      baseName: "category",
      type: "IncidentUserDefinedFieldCategory",
    },
    collected: {
      baseName: "collected",
      type: "IncidentUserDefinedFieldCollected",
    },
    defaultValue: {
      baseName: "default_value",
      type: "string",
    },
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    ordinal: {
      baseName: "ordinal",
      type: "string",
    },
    required: {
      baseName: "required",
      type: "boolean",
    },
    validValues: {
      baseName: "valid_values",
      type: "Array<IncidentUserDefinedFieldValidValue>",
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
    return IncidentUserDefinedFieldAttributesUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
