/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for dataset dependency.
 */
export class SecurityMonitoringDatasetDependencyAttributesResponse {
  /**
   * The count of resources that depend on the dataset.
   */
  "count": number;
  /**
   * Array of IDs of resources that depend on the dataset.
   */
  "ids": Array<string>;
  /**
   * The type of resource that depends on the dataset.
   */
  "resourceType": string;

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
    count: {
      baseName: "count",
      type: "number",
      required: true,
      format: "int64",
    },
    ids: {
      baseName: "ids",
      type: "Array<string>",
      required: true,
    },
    resourceType: {
      baseName: "resource_type",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringDatasetDependencyAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
