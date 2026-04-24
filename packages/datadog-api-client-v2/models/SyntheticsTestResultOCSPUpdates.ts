/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * OCSP response update timestamps.
 */
export class SyntheticsTestResultOCSPUpdates {
  /**
   * Unix timestamp (ms) of the next expected OCSP update.
   */
  "nextUpdate"?: number;
  /**
   * Unix timestamp (ms) of when the OCSP response was produced.
   */
  "producedAt"?: number;
  /**
   * Unix timestamp (ms) of this OCSP update.
   */
  "thisUpdate"?: number;

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
    nextUpdate: {
      baseName: "next_update",
      type: "number",
      format: "int64",
    },
    producedAt: {
      baseName: "produced_at",
      type: "number",
      format: "int64",
    },
    thisUpdate: {
      baseName: "this_update",
      type: "number",
      format: "int64",
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
    return SyntheticsTestResultOCSPUpdates.attributeTypeMap;
  }

  public constructor() {}
}
