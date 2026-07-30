import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentImpactFieldChoice } from "./IncidentImpactFieldChoice";
import { IncidentImpactFieldValueType } from "./IncidentImpactFieldValueType";

/**
 * Attributes for creating an impact field.
 */
export class IncidentImpactFieldDataAttributesRequest {
  /**
   * The display name of the impact field.
   */
  "displayName": string;
  /**
   * The choices for dropdown or multiselect fields.
   */
  "fieldChoices"?: Array<IncidentImpactFieldChoice>;
  /**
   * The type of an impact field.
   */
  "fieldType": IncidentImpactFieldValueType;
  /**
   * The normalized name of the impact field (used as identifier).
   */
  "name": string;
  /**
   * The tag key associated with the field (for metrictag type).
   */
  "tagKey"?: string;
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
    displayName: {
      baseName: "display_name",
      type: "string",
      required: true,
    },
    fieldChoices: {
      baseName: "field_choices",
      type: "Array<IncidentImpactFieldChoice>",
    },
    fieldType: {
      baseName: "field_type",
      type: "IncidentImpactFieldValueType",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    tagKey: {
      baseName: "tag_key",
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
    return IncidentImpactFieldDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
