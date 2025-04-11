import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOBulkDeleteError } from "./SLOBulkDeleteError";
import { SLOBulkDeleteResponseData } from "./SLOBulkDeleteResponseData";

/**
 * The bulk partial delete service level objective object endpoint
 * response.
 *
 * This endpoint operates on multiple service level objective objects, so
 * it may be partially successful. In such cases, the "data" and "error"
 * fields in this response indicate which deletions succeeded and failed.
 */
export class SLOBulkDeleteResponse {
  /**
   * An array of service level objective objects.
   */
  "data"?: SLOBulkDeleteResponseData;
  /**
   * Array of errors object returned.
   */
  "errors"?: Array<SLOBulkDeleteError>;
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
      type: "SLOBulkDeleteResponseData",
    },
    errors: {
      baseName: "errors",
      type: "Array<SLOBulkDeleteError>",
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
    return SLOBulkDeleteResponse.attributeTypeMap;
  }

  public constructor() {}
}
