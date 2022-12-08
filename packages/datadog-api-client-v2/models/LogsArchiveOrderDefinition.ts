/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArchiveOrderAttributes } from "./LogsArchiveOrderAttributes";
import { LogsArchiveOrderDefinitionType } from "./LogsArchiveOrderDefinitionType";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The definition of an archive order.
 */
export class LogsArchiveOrderDefinition {
  /**
   * The attributes associated with the archive order.
   */
  "attributes": LogsArchiveOrderAttributes;
  /**
   * Type of the archive order definition.
   */
  "type": LogsArchiveOrderDefinitionType | UnparsedObject;

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
      type: "LogsArchiveOrderAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsArchiveOrderDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsArchiveOrderDefinition.attributeTypeMap;
  }

  public constructor() {}
}
