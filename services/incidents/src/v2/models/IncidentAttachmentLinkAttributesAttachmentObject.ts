import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The link attachment.
 */
export class IncidentAttachmentLinkAttributesAttachmentObject {
  /**
   * The URL of this link attachment.
   */
  "documentUrl": string;
  /**
   * The title of this link attachment.
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentAttachmentLinkAttributesAttachmentObject.attributeTypeMap;
  }

  public constructor() {}
}
