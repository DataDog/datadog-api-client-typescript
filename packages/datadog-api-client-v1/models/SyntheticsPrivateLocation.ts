/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsPrivateLocationSecrets } from "./SyntheticsPrivateLocationSecrets";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Object containing information about the private location to create.
 */

export class SyntheticsPrivateLocation {
  /**
   * Description of the private location.
   */
  "description": string;
  /**
   * Unique identifier of the private location.
   */
  "id"?: string;
  /**
   * Name of the private location.
   */
  "name": string;
  "secrets"?: SyntheticsPrivateLocationSecrets;
  /**
   * Array of tags attached to the private location.
   */
  "tags": Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    secrets: {
      baseName: "secrets",
      type: "SyntheticsPrivateLocationSecrets",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsPrivateLocation.attributeTypeMap;
  }

  public constructor() {}
}
