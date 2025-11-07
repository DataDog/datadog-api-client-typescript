import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateUploadRequestData } from "./CreateUploadRequestData";

/**
 * Request to create an upload for a file to be ingested into a reference table.
 */
export class CreateUploadRequest {
  /**
   * Request data for creating an upload for a file to be ingested into a reference table.
   */
  "data"?: CreateUploadRequestData;
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
      type: "CreateUploadRequestData",
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
    return CreateUploadRequest.attributeTypeMap;
  }

  public constructor() {}
}
