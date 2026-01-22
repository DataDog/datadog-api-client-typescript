import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The updated attachment object.
 */
export class PatchAttachmentRequestDataAttributesAttachment {
  /**
   * The updated URL for the attachment.
   */
  "documentUrl"?: string;
  /**
   * The updated title for the attachment.
   */
  "title"?: string;
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
    },
    title: {
      baseName: "title",
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
    return PatchAttachmentRequestDataAttributesAttachment.attributeTypeMap;
  }

  public constructor() {}
}
