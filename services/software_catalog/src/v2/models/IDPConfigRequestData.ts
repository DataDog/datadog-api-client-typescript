import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IDPConfigRequestAttributes } from "./IDPConfigRequestAttributes";
import { IDPConfigType } from "./IDPConfigType";

/**
 * IDP configuration request data.
 */
export class IDPConfigRequestData {
  /**
   * IDP configuration request attributes.
   */
  "attributes": IDPConfigRequestAttributes;
  /**
   * Resource type.
   */
  "type": IDPConfigType;
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
      type: "IDPConfigRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IDPConfigType",
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
    return IDPConfigRequestData.attributeTypeMap;
  }

  public constructor() {}
}
