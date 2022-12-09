/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes associated with the archive order.
 */
export class LogsArchiveOrderAttributes {
  /**
   * An ordered array of `<ARCHIVE_ID>` strings, the order of archive IDs in the array
   * define the overall archives order for Datadog.
   */
  "archiveIds": Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    archiveIds: {
      baseName: "archive_ids",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsArchiveOrderAttributes.attributeTypeMap;
  }

  public constructor() {}
}
