/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringDatasetVersionEntry } from "./SecurityMonitoringDatasetVersionEntry";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a dataset version history response.
 */
export class SecurityMonitoringDatasetVersionHistoryAttributes {
  /**
   * The total number of versions available for this dataset.
   */
  "count": number;
  /**
   * A map from version number (as a string) to the dataset state at that version.
   */
  "data": { [key: string]: SecurityMonitoringDatasetVersionEntry };

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
    data: {
      baseName: "data",
      type: "{ [key: string]: SecurityMonitoringDatasetVersionEntry; }",
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
    return SecurityMonitoringDatasetVersionHistoryAttributes.attributeTypeMap;
  }

  public constructor() {}
}
