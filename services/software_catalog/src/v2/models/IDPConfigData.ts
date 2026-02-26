import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IDPConfigAttributes } from "./IDPConfigAttributes";
import { IDPConfigType } from "./IDPConfigType";

/**
 * IDP configuration data.
 */
export class IDPConfigData {
  /**
   * IDP configuration attributes.
   */
  "attributes": IDPConfigAttributes;
  /**
   * Configuration identifier.
   */
  "id": string;
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
      type: "IDPConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return IDPConfigData.attributeTypeMap;
  }

  public constructor() {}
}
