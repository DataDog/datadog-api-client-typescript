/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArchiveCreateRequestAttributes } from "./LogsArchiveCreateRequestAttributes";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The definition of an archive.
 */
export class LogsArchiveCreateRequestDefinition {
  /**
   * The attributes associated with the archive.
   */
  "attributes"?: LogsArchiveCreateRequestAttributes;
  /**
   * The type of the resource. The value should always be archives.
   */
  "type": string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "LogsArchiveCreateRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsArchiveCreateRequestDefinition.attributeTypeMap;
  }

  public constructor() {}
}
