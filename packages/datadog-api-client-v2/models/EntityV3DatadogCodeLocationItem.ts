/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * code location item.
 */
export class EntityV3DatadogCodeLocationItem {
  /**
   * The paths (glob) to the source code of the service
   */
  "paths"?: Array<string>;
  /**
   * The repository path of the source code of the entity
   */
  "repositoryUrl"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    paths: {
      baseName: "paths",
      type: "Array<string>",
    },
    repositoryUrl: {
      baseName: "repositoryURL",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3DatadogCodeLocationItem.attributeTypeMap;
  }

  public constructor() {}
}
