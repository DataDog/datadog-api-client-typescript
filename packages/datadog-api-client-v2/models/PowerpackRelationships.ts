/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Creator } from "./Creator";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Powerpack relationship object.
 */
export class PowerpackRelationships {
  /**
   * Creator of the object.
   */
  "author"?: Creator;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    author: {
      baseName: "author",
      type: "Creator",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PowerpackRelationships.attributeTypeMap;
  }

  public constructor() {}
}
