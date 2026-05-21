import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a status pages suggestion.
 */
export class IncidentStatusPagesSuggestionDataAttributes {
  /**
   * The suggested status for the status page.
   */
  "status": string;
  /**
   * The suggested update text for the status page notice.
   */
  "updateText": string;
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
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    updateText: {
      baseName: "update_text",
      type: "string",
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
    return IncidentStatusPagesSuggestionDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
