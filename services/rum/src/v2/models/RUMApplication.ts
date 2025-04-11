import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMApplicationAttributes } from "./RUMApplicationAttributes";
import { RUMApplicationType } from "./RUMApplicationType";

/**
 * RUM application.
 */
export class RUMApplication {
  /**
   * RUM application attributes.
   */
  "attributes": RUMApplicationAttributes;
  /**
   * RUM application ID.
   */
  "id": string;
  /**
   * RUM application response type.
   */
  "type": RUMApplicationType;
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
      type: "RUMApplicationAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMApplicationType",
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
    return RUMApplication.attributeTypeMap;
  }

  public constructor() {}
}
