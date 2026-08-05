import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateDegradationRequestDataAttributesStatus } from "./CreateDegradationRequestDataAttributesStatus";

/**
 * A pre-filled update for a degradation created from this template.
 */
export class DegradationTemplateDataAttributesUpdatesItems {
  /**
   * The message of the update.
   */
  "message"?: string;
  /**
   * The status of the degradation.
   */
  "status": CreateDegradationRequestDataAttributesStatus;
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
    message: {
      baseName: "message",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "CreateDegradationRequestDataAttributesStatus",
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
    return DegradationTemplateDataAttributesUpdatesItems.attributeTypeMap;
  }

  public constructor() {}
}
