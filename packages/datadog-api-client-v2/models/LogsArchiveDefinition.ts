/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArchiveAttributes } from "./LogsArchiveAttributes";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of an archive.
 */
export class LogsArchiveDefinition {
  /**
   * The attributes associated with the archive.
   */
  "attributes"?: LogsArchiveAttributes;
  /**
   * The archive ID.
   */
  "id"?: string;
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
      type: "LogsArchiveAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
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
    return LogsArchiveDefinition.attributeTypeMap;
  }

  public constructor() {}
}
