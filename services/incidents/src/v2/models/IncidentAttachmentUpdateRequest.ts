import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentAttachmentUpdateData } from "./IncidentAttachmentUpdateData";

/**
 * The update request for an incident's attachments.
 */
export class IncidentAttachmentUpdateRequest {
  /**
   * An array of incident attachments. An attachment object without an "id" key indicates that you want to
   * create that attachment. An attachment object without an "attributes" key indicates that you want to
   * delete that attachment. An attachment object with both the "id" key and a populated "attributes" object
   * indicates that you want to update that attachment.
   */
  "data": Array<IncidentAttachmentUpdateData>;
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
      type: "Array<IncidentAttachmentUpdateData>",
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
    return IncidentAttachmentUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
