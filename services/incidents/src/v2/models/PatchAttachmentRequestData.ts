import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentAttachmentType } from "./IncidentAttachmentType";
import { PatchAttachmentRequestDataAttributes } from "./PatchAttachmentRequestDataAttributes";

/**
 * Attachment data for an update request.
 */
export class PatchAttachmentRequestData {
  /**
   * The attributes for updating an attachment.
   */
  "attributes"?: PatchAttachmentRequestDataAttributes;
  /**
   * The unique identifier of the attachment.
   */
  "id"?: string;
  /**
   * The incident attachment resource type.
   */
  "type": IncidentAttachmentType;
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
      type: "PatchAttachmentRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "IncidentAttachmentType",
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
    return PatchAttachmentRequestData.attributeTypeMap;
  }

  public constructor() {}
}
