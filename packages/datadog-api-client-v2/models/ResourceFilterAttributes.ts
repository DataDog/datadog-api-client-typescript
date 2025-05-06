/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a resource filter.
 */
export class ResourceFilterAttributes {
  /**
   * A map of cloud provider names (e.g., "aws", "gcp", "azure") to a map of account/resource IDs and their associated tag filters.
   */
  "cloudProvider": { [key: string]: { [key: string]: Array<string> } };
  /**
   * The UUID of the resource filter.
   */
  "uuid"?: string;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cloudProvider: {
      baseName: "cloud_provider",
      type: "{ [key: string]: { [key: string]: Array<string>; }; }",
      required: true,
    },
    uuid: {
      baseName: "uuid",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ResourceFilterAttributes.attributeTypeMap;
  }

  public constructor() {}
}
