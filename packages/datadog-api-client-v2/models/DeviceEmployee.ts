/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Directory information about the employee associated with the device,
 * sourced from a customer reference table.
 * Absent when no reference table is configured or the device has no match.
 */
export class DeviceEmployee {
  /**
   * City where the employee is based.
   */
  "city"?: string;
  /**
   * Country where the employee is based.
   */
  "country"?: string;
  /**
   * Department the employee belongs to.
   */
  "department"?: string;
  /**
   * Email address of the employee.
   */
  "email"?: string;
  /**
   * Full name of the employee.
   */
  "name"?: string;
  /**
   * Office the employee is assigned to.
   */
  "office"?: string;
  /**
   * Team the employee belongs to.
   */
  "team"?: string;

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
    city: {
      baseName: "city",
      type: "string",
    },
    country: {
      baseName: "country",
      type: "string",
    },
    department: {
      baseName: "department",
      type: "string",
    },
    email: {
      baseName: "email",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    office: {
      baseName: "office",
      type: "string",
    },
    team: {
      baseName: "team",
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
    return DeviceEmployee.attributeTypeMap;
  }

  public constructor() {}
}
