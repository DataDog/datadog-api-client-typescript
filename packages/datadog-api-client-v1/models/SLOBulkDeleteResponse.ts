/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOBulkDeleteError } from "./SLOBulkDeleteError";
import { SLOBulkDeleteResponseData } from "./SLOBulkDeleteResponseData";

import { AttributeTypeMap } from "../util";

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
   * @ignore
   */
  "unparsedObject"?: any;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOBulkDeleteResponse.attributeTypeMap;
  }

  public constructor() {}
}
