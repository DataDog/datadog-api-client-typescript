/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for updating Azure scan options configuration.
 */
export class AzureScanOptionsInputUpdateDataAttributes {
  /**
   * Indicates if scanning for vulnerabilities in containers is enabled.
   */
  "vulnContainersOs"?: boolean;
  /**
   * Indicates if scanning for vulnerabilities in hosts is enabled.
   */
  "vulnHostOs"?: boolean;

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
    vulnContainersOs: {
      baseName: "vuln_containers_os",
      type: "boolean",
    },
    vulnHostOs: {
      baseName: "vuln_host_os",
      type: "boolean",
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
    return AzureScanOptionsInputUpdateDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
