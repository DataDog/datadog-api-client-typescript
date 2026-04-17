/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringTerraformExportAttributes } from "./SecurityMonitoringTerraformExportAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Terraform export data object.
 */
export class SecurityMonitoringTerraformExportData {
  /**
   * Attributes of the Terraform export response.
   */
  "attributes": SecurityMonitoringTerraformExportAttributes;
  /**
   * The resource identifier composed of the Terraform type name and the resource ID separated by `|`.
   */
  "id": string;
  /**
   * The JSON:API type. Always `format_resource`.
   */
  "type": string;

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
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringTerraformExportAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
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
    return SecurityMonitoringTerraformExportData.attributeTypeMap;
  }

  public constructor() {}
}
