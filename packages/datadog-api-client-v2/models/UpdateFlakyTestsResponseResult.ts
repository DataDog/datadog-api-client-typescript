/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Result of updating a single flaky test state.
 */
export class UpdateFlakyTestsResponseResult {
  /**
   * Error message if the update failed.
   */
  "error"?: string;
  /**
   * The ID of the flaky test from the request. This is the same ID returned by the Search flaky tests endpoint and corresponds to the test_fingerprint_fqn field in test run events.
   */
  "id": string;
  /**
   * `True` if the update was successful, `False` if there were any errors.
   */
  "success": boolean;

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
    error: {
      baseName: "error",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    success: {
      baseName: "success",
      type: "boolean",
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
    return UpdateFlakyTestsResponseResult.attributeTypeMap;
  }

  public constructor() {}
}
