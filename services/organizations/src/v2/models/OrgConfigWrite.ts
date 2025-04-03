import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgConfigType } from "./OrgConfigType";
import { OrgConfigWriteAttributes } from "./OrgConfigWriteAttributes";

/**
 * An Org Config write operation.
 */
export class OrgConfigWrite {
  /**
   * Writable attributes of an Org Config.
   */
  "attributes": OrgConfigWriteAttributes;
  /**
   * Data type of an Org Config.
   */
  "type": OrgConfigType;
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
      type: "OrgConfigWriteAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OrgConfigType",
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
    return OrgConfigWrite.attributeTypeMap;
  }

  public constructor() {}
}
