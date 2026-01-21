import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AttachmentData } from "./AttachmentData";
import { AttachmentIncluded } from "./AttachmentIncluded";

/**
 * An attachment response containing the attachment data and related objects.
 */
export class Attachment {
  /**
   * Attachment data from a response.
   */
  "data"?: AttachmentData;
  "included"?: Array<AttachmentIncluded>;
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
      type: "AttachmentData",
    },
    included: {
      baseName: "included",
      type: "Array<AttachmentIncluded>",
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
    return Attachment.attributeTypeMap;
  }

  public constructor() {}
}
