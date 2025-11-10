/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * File metadata for reference tables created by upload. Note that upload_id is only returned in the immediate create/replace response and is not available in subsequent GET requests.
 */
export class TableResultV2DataAttributesFileMetadataLocalFile {
  /**
   * The error message returned from the creation/update.
   */
  "errorMessage"?: string;
  /**
   * The number of rows that failed to create/update.
   */
  "errorRowCount"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    errorMessage: {
      baseName: "error_message",
      type: "string",
    },
    errorRowCount: {
      baseName: "error_row_count",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableResultV2DataAttributesFileMetadataLocalFile.attributeTypeMap;
  }

  public constructor() {}
}
