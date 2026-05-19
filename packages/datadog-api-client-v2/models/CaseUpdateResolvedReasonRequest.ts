/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseUpdateResolvedReason } from "./CaseUpdateResolvedReason";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request payload for updating the resolution reason on a closed security case.
 */
export class CaseUpdateResolvedReasonRequest {
  /**
   * Data object for updating a case's resolved reason.
   */
  "data": CaseUpdateResolvedReason;

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
    data: {
      baseName: "data",
      type: "CaseUpdateResolvedReason",
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
    return CaseUpdateResolvedReasonRequest.attributeTypeMap;
  }

  public constructor() {}
}
