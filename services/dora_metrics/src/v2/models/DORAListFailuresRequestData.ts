import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORAListFailuresRequestAttributes } from "./DORAListFailuresRequestAttributes";
import { DORAListFailuresRequestDataType } from "./DORAListFailuresRequestDataType";

/**
 * The JSON:API data.
 */
export class DORAListFailuresRequestData {
  /**
   * Attributes to get a list of failures.
   */
  "attributes": DORAListFailuresRequestAttributes;
  /**
   * The definition of `DORAListFailuresRequestDataType` object.
   */
  "type"?: DORAListFailuresRequestDataType;
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
      type: "DORAListFailuresRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DORAListFailuresRequestDataType",
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
    return DORAListFailuresRequestData.attributeTypeMap;
  }

  public constructor() {}
}
