/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Number of RUM Units used for each hour for a given organization (data available as of November 1, 2021).
 */
export class UsageRumUnitsHour {
  /**
   * The number of browser RUM units.
   */
  "browserRumUnits"?: number;
  /**
   * The number of mobile RUM units.
   */
  "mobileRumUnits"?: number;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;
  /**
   * Total RUM units across mobile and browser RUM.
   */
  "rumUnits"?: number;

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
    browserRumUnits: {
      baseName: "browser_rum_units",
      type: "number",
      format: "int64",
    },
    mobileRumUnits: {
      baseName: "mobile_rum_units",
      type: "number",
      format: "int64",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    rumUnits: {
      baseName: "rum_units",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageRumUnitsHour.attributeTypeMap;
  }

  public constructor() {}
}
