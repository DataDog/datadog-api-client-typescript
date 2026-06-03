/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An SPDX license entry returned by the licenses list endpoint.
 */
export class LicensesListResponseDataAttributesLicensesItems {
  /**
   * The human-readable name of the license.
   */
  "displayName": string;
  /**
   * The SPDX identifier of the license.
   */
  "identifier": string;
  /**
   * The short name of the license, typically matching the SPDX identifier.
   */
  "shortName": string;

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
    displayName: {
      baseName: "display_name",
      type: "string",
      required: true,
    },
    identifier: {
      baseName: "identifier",
      type: "string",
      required: true,
    },
    shortName: {
      baseName: "short_name",
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
    return LicensesListResponseDataAttributesLicensesItems.attributeTypeMap;
  }

  public constructor() {}
}
