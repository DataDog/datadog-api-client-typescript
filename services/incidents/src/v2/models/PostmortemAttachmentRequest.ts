import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PostmortemAttachmentRequestData } from "./PostmortemAttachmentRequestData";

export class PostmortemAttachmentRequest {
  /**
   * Postmortem attachment data
   */
  "data": PostmortemAttachmentRequestData;
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
      type: "PostmortemAttachmentRequestData",
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
    return PostmortemAttachmentRequest.attributeTypeMap;
  }

  public constructor() {}
}
