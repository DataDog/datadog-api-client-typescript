import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentAttachmentData } from "./IncidentAttachmentData";
import { IncidentAttachmentsResponseIncludedItem } from "./IncidentAttachmentsResponseIncludedItem";

/**
 * The response object containing an incident's attachments.
 */
export class IncidentAttachmentsResponse {
  /**
   * An array of incident attachments.
   */
  "data": Array<IncidentAttachmentData>;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentAttachmentsResponseIncludedItem>;
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
      type: "Array<IncidentAttachmentData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentAttachmentsResponseIncludedItem>",
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
    return IncidentAttachmentsResponse.attributeTypeMap;
  }

  public constructor() {}
}
