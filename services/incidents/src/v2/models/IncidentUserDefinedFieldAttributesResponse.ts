import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserDefinedFieldCategory } from "./IncidentUserDefinedFieldCategory";
import { IncidentUserDefinedFieldCollected } from "./IncidentUserDefinedFieldCollected";
import { IncidentUserDefinedFieldMetadata } from "./IncidentUserDefinedFieldMetadata";
import { IncidentUserDefinedFieldValidValue } from "./IncidentUserDefinedFieldValidValue";

/**
 * Attributes of an incident user-defined field.
 */
export class IncidentUserDefinedFieldAttributesResponse {
  /**
   * The resource type this field is attached to. Always "incidents".
   */
  "attachedTo": string;
  /**
   * The section in which the field appears. Use "what_happened" for impact-related fields or "why_it_happened" for root cause fields. When null, the field appears in the Attributes section.
   */
  "category": IncidentUserDefinedFieldCategory | null;
  /**
   * The lifecycle stage at which the app prompts users to fill out this field. Cannot be set on required fields.
   */
  "collected": IncidentUserDefinedFieldCollected | null;
  /**
   * Timestamp when the field was created.
   */
  "created": Date;
  /**
   * The default value for the field.
   */
  "defaultValue": string | null;
  /**
   * Timestamp when the field was soft-deleted, or null if not deleted.
   */
  "deleted": Date | null;
  /**
   * The human-readable name shown in the UI.
   */
  "displayName": string;
  /**
   * Metadata for autocomplete-type user-defined fields, describing how to populate autocomplete options.
   */
  "metadata": IncidentUserDefinedFieldMetadata | null;
  /**
   * Timestamp when the field was last modified.
   */
  "modified": Date | null;
  /**
   * The unique machine-readable name of the field.
   */
  "name": string;
  /**
   * A decimal string representing the field's display order in the UI.
   */
  "ordinal": string | null;
  /**
   * Reserved for future use. Always null.
   */
  "prerequisite": string | null;
  /**
   * When true, users must fill out this field on incidents.
   */
  "required": boolean;
  /**
   * When true, this field is reserved for system use and cannot be deleted.
   */
  "reserved": boolean;
  /**
   * Reserved for internal use. Always 0.
   */
  "tableId": number;
  /**
   * For metric tag-type fields only, the metric tag key that powers the autocomplete options.
   */
  "tagKey": string | null;
  /**
   * The data type of the field. 1=dropdown, 2=multiselect, 3=textbox, 4=textarray, 5=metrictag, 6=autocomplete, 7=number, 8=datetime.
   */
  "type": number | null;
  /**
   * The list of allowed values for dropdown, multiselect, and autocomplete fields.
   */
  "validValues": Array<IncidentUserDefinedFieldValidValue> | null;
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
    attachedTo: {
      baseName: "attached_to",
      type: "string",
      required: true,
    },
    category: {
      baseName: "category",
      type: "IncidentUserDefinedFieldCategory",
      required: true,
    },
    collected: {
      baseName: "collected",
      type: "IncidentUserDefinedFieldCollected",
      required: true,
    },
    created: {
      baseName: "created",
      type: "Date",
      required: true,
      format: "date-time",
    },
    defaultValue: {
      baseName: "default_value",
      type: "string",
      required: true,
    },
    deleted: {
      baseName: "deleted",
      type: "Date",
      required: true,
      format: "date-time",
    },
    displayName: {
      baseName: "display_name",
      type: "string",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "IncidentUserDefinedFieldMetadata",
      required: true,
    },
    modified: {
      baseName: "modified",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    ordinal: {
      baseName: "ordinal",
      type: "string",
      required: true,
    },
    prerequisite: {
      baseName: "prerequisite",
      type: "string",
      required: true,
    },
    required: {
      baseName: "required",
      type: "boolean",
      required: true,
    },
    reserved: {
      baseName: "reserved",
      type: "boolean",
      required: true,
    },
    tableId: {
      baseName: "table_id",
      type: "number",
      required: true,
      format: "int64",
    },
    tagKey: {
      baseName: "tag_key",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "number",
      required: true,
      format: "int32",
    },
    validValues: {
      baseName: "valid_values",
      type: "Array<IncidentUserDefinedFieldValidValue>",
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
    return IncidentUserDefinedFieldAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
