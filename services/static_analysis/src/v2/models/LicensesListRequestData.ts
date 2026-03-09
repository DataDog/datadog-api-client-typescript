import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LicensesListRequestDataAttributes } from "./LicensesListRequestDataAttributes";
import { LicensesListRequestDataType } from "./LicensesListRequestDataType";

export class LicensesListRequestData {
  "attributes"?: LicensesListRequestDataAttributes;
  /**
   * Unique identifier for the request
   */
  "id"?: string;
  "type": LicensesListRequestDataType;
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
      type: "LicensesListRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LicensesListRequestDataType",
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
    return LicensesListRequestData.attributeTypeMap;
  }

  public constructor() {}
}
