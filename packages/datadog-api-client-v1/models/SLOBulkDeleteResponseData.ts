/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An array of service level objective objects.
 */
export class SLOBulkDeleteResponseData {
  /**
   * An array of service level objective object IDs that indicates
   * which objects that were completely deleted.
   */
  "deleted"?: Array<string>;
  /**
   * An array of service level objective object IDs that indicates
   * which objects that were modified (objects for which at least one
   * threshold was deleted, but that were not completely deleted).
   */
  "updated"?: Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    deleted: {
      baseName: "deleted",
      type: "Array<string>",
    },
    updated: {
      baseName: "updated",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOBulkDeleteResponseData.attributeTypeMap;
  }

  public constructor() {}
}
