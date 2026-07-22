import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchDegradationUpdateRequestDataAttributesStatus } from "./PatchDegradationUpdateRequestDataAttributesStatus";

/**
 * Attributes for editing a degradation update.
 */
export class PatchDegradationUpdateRequestDataAttributes {
  /**
   * The message body of the update.
   */
  "description"?: string;
  /**
   * The status of the degradation update.
   */
  "status"?: PatchDegradationUpdateRequestDataAttributesStatus;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "PatchDegradationUpdateRequestDataAttributesStatus",
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
    return PatchDegradationUpdateRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
