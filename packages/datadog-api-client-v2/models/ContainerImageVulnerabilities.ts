/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Vulnerability counts associated with the Container Image.
*/
export class ContainerImageVulnerabilities {
  /**
   * ID of the Container Image.
  */
  "assetId"?: string;
  /**
   * Number of vulnerabilities with CVSS Critical severity.
  */
  "critical"?: number;
  /**
   * Number of vulnerabilities with CVSS High severity.
  */
  "high"?: number;
  /**
   * Number of vulnerabilities with CVSS Low severity.
  */
  "low"?: number;
  /**
   * Number of vulnerabilities with CVSS Medium severity.
  */
  "medium"?: number;
  /**
   * Number of vulnerabilities with CVSS None severity.
  */
  "none"?: number;
  /**
   * Number of vulnerabilities with an unknown CVSS severity.
  */
  "unknown"?: number;

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
    "assetId": {
      "baseName": "asset_id",
      "type": "string",
    },
    "critical": {
      "baseName": "critical",
      "type": "number",
      "format": "int64",
    },
    "high": {
      "baseName": "high",
      "type": "number",
      "format": "int64",
    },
    "low": {
      "baseName": "low",
      "type": "number",
      "format": "int64",
    },
    "medium": {
      "baseName": "medium",
      "type": "number",
      "format": "int64",
    },
    "none": {
      "baseName": "none",
      "type": "number",
      "format": "int64",
    },
    "unknown": {
      "baseName": "unknown",
      "type": "number",
      "format": "int64",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return ContainerImageVulnerabilities.attributeTypeMap;

  }

  public constructor() {











  }
}









