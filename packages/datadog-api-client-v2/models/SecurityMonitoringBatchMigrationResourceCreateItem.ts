/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringBatchMigrationResourceInputType } from "./SecurityMonitoringBatchMigrationResourceInputType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A source rule to translate into a Cloud SIEM detection rule.
 */
export class SecurityMonitoringBatchMigrationResourceCreateItem {
  /**
   * The description of the resource.
   */
  "description"?: string;
  /**
   * The source query or natural language description to translate. Must not be blank.
   */
  "input": string;
  /**
   * The type of the source rule: `spl` for a Splunk SPL search or saved search definition,
   * `natural_language` for a plain-English description of the behavior to detect, or `kql`
   * for a Microsoft KQL query. SPL inputs must be self-contained, with search macros expanded.
   */
  "inputType": SecurityMonitoringBatchMigrationResourceInputType;
  /**
   * The name of the resource.
   */
  "name"?: string;

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
    description: {
      baseName: "description",
      type: "string",
    },
    input: {
      baseName: "input",
      type: "string",
      required: true,
    },
    inputType: {
      baseName: "inputType",
      type: "SecurityMonitoringBatchMigrationResourceInputType",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
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
    return SecurityMonitoringBatchMigrationResourceCreateItem.attributeTypeMap;
  }

  public constructor() {}
}
