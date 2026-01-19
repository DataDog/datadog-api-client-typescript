import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentAttachmentType } from "./IncidentAttachmentType";
import { PostmortemAttachmentRequestAttributes } from "./PostmortemAttachmentRequestAttributes";

/**
 * Postmortem attachment data
 */
export class PostmortemAttachmentRequestData {
  /**
   * Postmortem attachment attributes
   */
  "attributes": PostmortemAttachmentRequestAttributes;
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
      type: "PostmortemAttachmentRequestAttributes",
      required: true,
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
    return PostmortemAttachmentRequestData.attributeTypeMap;
  }

  public constructor() {}
}
