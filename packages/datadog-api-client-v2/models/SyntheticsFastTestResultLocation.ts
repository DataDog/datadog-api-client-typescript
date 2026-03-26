/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Location from which the fast test was executed.
 */
export class SyntheticsFastTestResultLocation {
  /**
   * ID of the location.
   */
  "id"?: string;
  /**
   * Display name of the location.
   */
  "name"?: string;
  /**
   * Agent version running at this location.
   */
  "version"?: string;
  /**
   * Identifier of the specific worker that ran the test.
   */
  "workerId"?: string;

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
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "string",
    },
    workerId: {
      baseName: "worker_id",
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
    return SyntheticsFastTestResultLocation.attributeTypeMap;
  }

  public constructor() {}
}
