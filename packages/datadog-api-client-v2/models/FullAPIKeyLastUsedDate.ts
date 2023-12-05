/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for the last time the specific API key was used.
 */
export class FullAPIKeyLastUsedDate {
  /**
   * The description of the what the API key was used for.
   */
  "description"?: string;
  /**
   * The data and time of when the API key was last used.
   */
  "timestamp"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
    },
    timestamp: {
      baseName: "timestamp",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FullAPIKeyLastUsedDate.attributeTypeMap;
  }

  public constructor() {}
}
