import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeRequestCreateAttributes } from "./ChangeRequestCreateAttributes";
import { ChangeRequestResourceType } from "./ChangeRequestResourceType";

/**
 * Data object to create a change request.
 */
export class ChangeRequestCreateData {
  /**
   * Attributes for creating a change request.
   */
  "attributes": ChangeRequestCreateAttributes;
  /**
   * Change request resource type.
   */
  "type": ChangeRequestResourceType;
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
      type: "ChangeRequestCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ChangeRequestResourceType",
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
    return ChangeRequestCreateData.attributeTypeMap;
  }

  public constructor() {}
}
