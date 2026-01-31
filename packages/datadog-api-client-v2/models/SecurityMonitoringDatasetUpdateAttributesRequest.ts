/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringDatasetDefinition } from "./SecurityMonitoringDatasetDefinition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for updating a security monitoring dataset.
 */
export class SecurityMonitoringDatasetUpdateAttributesRequest {
  /**
   * The definition of a dataset, including its data source, name, indexes, and columns.
   */
  "definition": SecurityMonitoringDatasetDefinition;
  /**
   * A description of the dataset (maximum 255 characters).
   */
  "description": string;
  /**
   * The expected version of the dataset for concurrent modification detection.
   */
  "version"?: number;

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
    definition: {
      baseName: "definition",
      type: "SecurityMonitoringDatasetDefinition",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int64",
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
    return SecurityMonitoringDatasetUpdateAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
