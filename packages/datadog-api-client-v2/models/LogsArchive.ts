/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArchiveDefinition } from "./LogsArchiveDefinition";

import { AttributeTypeMap } from "../util";

/**
 * The logs archive.
 */
export class LogsArchive {
  /**
   * The definition of an archive.
   */
  "data"?: LogsArchiveDefinition;

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
      type: "LogsArchiveDefinition",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsArchive.attributeTypeMap;
  }

  public constructor() {}
}
