import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeletedSuiteResponseDataAttributes } from "./DeletedSuiteResponseDataAttributes";
import { DeletedSuiteType } from "./DeletedSuiteType";

export class DeletedSuiteResponseData {
  "attributes"?: DeletedSuiteResponseDataAttributes;
  "id"?: string;
  "type"?: DeletedSuiteType;
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
      type: "DeletedSuiteResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DeletedSuiteType",
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
    return DeletedSuiteResponseData.attributeTypeMap;
  }

  public constructor() {}
}
