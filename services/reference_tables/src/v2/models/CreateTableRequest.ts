import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateTableRequestData } from "./CreateTableRequestData";

/**
 * The definition of `CreateTableRequest` object.
 */
export class CreateTableRequest {
  /**
   * The definition of `CreateTableRequestData` object.
   */
  "data"?: CreateTableRequestData;
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
    data: {
      baseName: "data",
      type: "CreateTableRequestData",
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
    return CreateTableRequest.attributeTypeMap;
  }

  public constructor() {}
}
