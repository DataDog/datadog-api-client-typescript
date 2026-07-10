import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The postmortem's attributes for a creation request.
 */
export class IncidentPostmortemCreateAttributes {
  /**
   * The URL of the postmortem document (for example, a Datadog notebook, Confluence page, or Google Doc).
   */
  "documentUrl": string;
  /**
   * The title of the postmortem.
   */
  "title": string;
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
    documentUrl: {
      baseName: "document_url",
      type: "string",
      required: true,
    },
    title: {
      baseName: "title",
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
    return IncidentPostmortemCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
