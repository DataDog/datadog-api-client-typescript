import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchAttachmentRequestDataAttributesAttachment } from "./PatchAttachmentRequestDataAttributesAttachment";

export class PatchAttachmentRequestDataAttributes {
  "attachment"?: PatchAttachmentRequestDataAttributesAttachment;
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
    attachment: {
      baseName: "attachment",
      type: "PatchAttachmentRequestDataAttributesAttachment",
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
    return PatchAttachmentRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
