/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArchiveOrderDefinition } from "./LogsArchiveOrderDefinition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A ordered list of archive IDs.
 */
export class LogsArchiveOrder {
  /**
   * The definition of an archive order.
   */
  "data"?: LogsArchiveOrderDefinition;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "LogsArchiveOrderDefinition",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsArchiveOrder.attributeTypeMap;
  }

  public constructor() {}
}
