import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateAttachmentRequestDataAttributes } from "./CreateAttachmentRequestDataAttributes";
import { IncidentAttachmentType } from "./IncidentAttachmentType";

export class CreateAttachmentRequestData {
  "attributes"?: CreateAttachmentRequestDataAttributes;
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
      type: "CreateAttachmentRequestDataAttributes",
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
    return CreateAttachmentRequestData.attributeTypeMap;
  }

  public constructor() {}
}
