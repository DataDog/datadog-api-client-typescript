import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FilesCoverageRequestData } from "./FilesCoverageRequestData";

/**
 * Request object for getting per-file code coverage data.
 */
export class FilesCoverageRequest {
  /**
   * Data object for files coverage request.
   */
  "data": FilesCoverageRequestData;
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
      type: "FilesCoverageRequestData",
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
    return FilesCoverageRequest.attributeTypeMap;
  }

  public constructor() {}
}
