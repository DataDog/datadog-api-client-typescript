/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringBatchMigrationResourceInputType } from "./SecurityMonitoringBatchMigrationResourceInputType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the batch migration resource to update. At least one attribute is required.
 */
export class SecurityMonitoringBatchMigrationResourceUpdateAttributes {
  /**
   * The description of the resource.
   */
  "description"?: string;
  /**
   * The source query or natural language description to translate. Must not be blank.
   */
  "input"?: string;
  /**
   * The type of the source rule: `spl` for a Splunk SPL search or saved search definition,
   * `natural_language` for a plain-English description of the behavior to detect, or `kql`
   * for a Microsoft KQL query. SPL inputs must be self-contained, with search macros expanded.
   */
  "inputType"?: SecurityMonitoringBatchMigrationResourceInputType;
  /**
   * The name of the resource.
   */
  "name"?: string;

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
    input: {
      baseName: "input",
      type: "string",
    },
    inputType: {
      baseName: "inputType",
      type: "SecurityMonitoringBatchMigrationResourceInputType",
    },
    name: {
      baseName: "name",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringBatchMigrationResourceUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
