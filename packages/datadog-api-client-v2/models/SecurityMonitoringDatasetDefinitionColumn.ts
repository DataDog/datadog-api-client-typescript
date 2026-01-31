/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringDatasetDefinitionColumnType } from "./SecurityMonitoringDatasetDefinitionColumnType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A column in a dataset definition.
 */
export class SecurityMonitoringDatasetDefinitionColumn {
  /**
   * The name of the column.
   */
  "column": string;
  /**
   * The type of the column in a dataset definition.
   */
  "type": SecurityMonitoringDatasetDefinitionColumnType;

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
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringDatasetDefinitionColumnType",
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
    return SecurityMonitoringDatasetDefinitionColumn.attributeTypeMap;
  }

  public constructor() {}
}
