/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An application key with its associated metadata.
 */
export class ApplicationKey {
  /**
   * Hash of an application key.
   */
  "hash"?: string;
  /**
   * Name of an application key.
   */
  "name"?: string;
  /**
   * Owner of an application key.
   */
  "owner"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    hash: {
      baseName: "hash",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    owner: {
      baseName: "owner",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApplicationKey.attributeTypeMap;
  }

  public constructor() {}
}
