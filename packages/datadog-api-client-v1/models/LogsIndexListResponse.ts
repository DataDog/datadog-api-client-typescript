/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsIndex } from "./LogsIndex";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object with all Index configurations for a given organization.
 */
export class LogsIndexListResponse {
  /**
   * Array of Log index configurations.
   */
  "indexes"?: Array<LogsIndex>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    indexes: {
      baseName: "indexes",
      type: "Array<LogsIndex>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsIndexListResponse.attributeTypeMap;
  }

  public constructor() {}
}
