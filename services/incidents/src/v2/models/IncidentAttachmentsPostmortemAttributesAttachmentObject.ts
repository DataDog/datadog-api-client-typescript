import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The postmortem attachment.
 */
export class IncidentAttachmentsPostmortemAttributesAttachmentObject {
  /**
   * The URL of this notebook attachment.
   */
  "documentUrl": string;
  /**
   * The title of this postmortem attachment.
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
      baseName: "documentUrl",
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
    return IncidentAttachmentsPostmortemAttributesAttachmentObject.attributeTypeMap;
  }

  public constructor() {}
}
