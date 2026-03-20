import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserDefinedFieldCategory } from "./IncidentUserDefinedFieldCategory";
import { IncidentUserDefinedFieldCollected } from "./IncidentUserDefinedFieldCollected";
import { IncidentUserDefinedFieldFieldType } from "./IncidentUserDefinedFieldFieldType";
import { IncidentUserDefinedFieldValidValue } from "./IncidentUserDefinedFieldValidValue";

/**
 * Attributes for creating an incident user-defined field.
 */
export class IncidentUserDefinedFieldAttributesCreateRequest {
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
   * The human-readable name shown in the UI. Defaults to a formatted version of the name if not provided.
   */
  "displayName"?: string;
  /**
   * The unique machine-readable name of the field. Must start with a letter or digit and contain only letters, digits, underscores, or periods.
   */
  "name": string;
  /**
   * A decimal string representing the field's display order in the UI.
   */
  "ordinal"?: string;
  /**
   * When true, users must fill out this field on incidents.
   */
  "required"?: boolean;
  /**
   * For metric tag-type fields only, the metric tag key that powers the autocomplete options.
   */
  "tagKey"?: string;
  /**
   * The data type of the field. 1=dropdown, 2=multiselect, 3=textbox, 4=textarray, 5=metrictag, 6=autocomplete, 7=number, 8=datetime.
   */
  "type": IncidentUserDefinedFieldFieldType;
  /**
   * The list of allowed values for dropdown, multiselect, and autocomplete fields. Limited to 1000 values.
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    ordinal: {
      baseName: "ordinal",
      type: "string",
    },
    required: {
      baseName: "required",
      type: "boolean",
    },
    tagKey: {
      baseName: "tag_key",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "IncidentUserDefinedFieldFieldType",
      required: true,
      format: "int32",
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
    return IncidentUserDefinedFieldAttributesCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
