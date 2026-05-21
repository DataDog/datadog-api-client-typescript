import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentStatusPagesSuggestionDataAttributes } from "./IncidentStatusPagesSuggestionDataAttributes";
import { IncidentStatusPagesSuggestionType } from "./IncidentStatusPagesSuggestionType";

/**
 * Status pages suggestion data.
 */
export class IncidentStatusPagesSuggestionData {
  /**
   * Attributes of a status pages suggestion.
   */
  "attributes": IncidentStatusPagesSuggestionDataAttributes;
  /**
   * The suggestion title.
   */
  "id": string;
  /**
   * Incident status pages suggestion resource type.
   */
  "type": IncidentStatusPagesSuggestionType;
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
    attributes: {
      baseName: "attributes",
      type: "IncidentStatusPagesSuggestionDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentStatusPagesSuggestionType",
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
    return IncidentStatusPagesSuggestionData.attributeTypeMap;
  }

  public constructor() {}
}
