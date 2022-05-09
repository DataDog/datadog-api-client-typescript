/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArchiveCreateRequestDefinition } from "./LogsArchiveCreateRequestDefinition";

import { AttributeTypeMap } from "../util";

/**
 * The logs archive.
 */
export class LogsArchiveCreateRequest {
  /**
   * The definition of an archive.
   */
  "data"?: LogsArchiveCreateRequestDefinition;

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
      type: "LogsArchiveCreateRequestDefinition",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsArchiveCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
