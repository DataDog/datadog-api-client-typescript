/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Description of the CI provider.
 */

export class SyntheticsCIBatchMetadataProvider {
  /**
   * Name of the CI provider.
   */
  "name"?: string;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsCIBatchMetadataProvider.attributeTypeMap;
  }

  public constructor() {}
}
