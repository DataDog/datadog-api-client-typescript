import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateTableRequestData } from "./CreateTableRequestData";

/**
 * Request body for creating a new reference table from a local file or cloud storage.
 */
export class CreateTableRequest {
  /**
   * The data object containing the table definition.
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
