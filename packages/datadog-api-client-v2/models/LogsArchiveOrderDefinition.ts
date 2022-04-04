/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsArchiveOrderAttributes } from "./LogsArchiveOrderAttributes";
import { LogsArchiveOrderDefinitionType } from "./LogsArchiveOrderDefinitionType";
import { AttributeTypeMap } from "../util";

/**
 * The definition of an archive order.
 */

export class LogsArchiveOrderDefinition {
  "attributes": LogsArchiveOrderAttributes;
  "type": LogsArchiveOrderDefinitionType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

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
