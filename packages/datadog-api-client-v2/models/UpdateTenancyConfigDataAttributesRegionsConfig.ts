/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Region configuration for updating an OCI tenancy, specifying which regions are available, enabled, or disabled for data collection.
 */
export class UpdateTenancyConfigDataAttributesRegionsConfig {
  /**
   * List of OCI regions available for data collection in the tenancy.
   */
  "available"?: Array<string>;
  /**
   * List of OCI regions explicitly disabled for data collection.
   */
  "disabled"?: Array<string>;
  /**
   * List of OCI regions enabled for data collection.
   */
  "enabled"?: Array<string>;

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
    available: {
      baseName: "available",
      type: "Array<string>",
    },
    disabled: {
      baseName: "disabled",
      type: "Array<string>",
    },
    enabled: {
      baseName: "enabled",
      type: "Array<string>",
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
    return UpdateTenancyConfigDataAttributesRegionsConfig.attributeTypeMap;
  }

  public constructor() {}
}
