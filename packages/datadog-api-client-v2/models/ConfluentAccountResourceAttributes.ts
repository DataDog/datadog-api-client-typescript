/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Attributes object for updating a Confluent resource.
 */
export class ConfluentAccountResourceAttributes {
  /**
   * The ID associated with a Confluent resource.
   */
  "id"?: string;
  /**
   * The resource type of the Resource. Can be `kafka`, `connector`, `ksql`, or `schema_registry`.
   */
  "resourceType"?: string;
  /**
   * A list of strings representing tags. Can be a single key, or key-value pairs separated by a colon.
   */
  "tags"?: Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
    },
    resourceType: {
      baseName: "resource_type",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ConfluentAccountResourceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
