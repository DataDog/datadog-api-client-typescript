/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DataExportConfig } from "./DataExportConfig";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS CCM Config response attributes.
 */
export class AWSCcmConfigResponseAttributes {
  /**
   * List of data export configurations for Cost and Usage Reports.
   */
  "dataExportConfigs"?: Array<DataExportConfig>;

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
    dataExportConfigs: {
      baseName: "data_export_configs",
      type: "Array<DataExportConfig>",
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
    return AWSCcmConfigResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
