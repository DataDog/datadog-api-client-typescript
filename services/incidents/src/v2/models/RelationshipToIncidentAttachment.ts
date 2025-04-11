import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToIncidentAttachmentData } from "./RelationshipToIncidentAttachmentData";

/**
 * A relationship reference for attachments.
 */
export class RelationshipToIncidentAttachment {
  /**
   * An array of incident attachments.
   */
  "data": Array<RelationshipToIncidentAttachmentData>;
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
    data: {
      baseName: "data",
      type: "Array<RelationshipToIncidentAttachmentData>",
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
    return RelationshipToIncidentAttachment.attributeTypeMap;
  }

  public constructor() {}
}
