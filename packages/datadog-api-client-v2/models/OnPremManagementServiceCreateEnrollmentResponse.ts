/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnPremManagementServiceCreateEnrollmentResponseData } from "./OnPremManagementServiceCreateEnrollmentResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for creating an enrollment.
 */
export class OnPremManagementServiceCreateEnrollmentResponse {
  /**
   * Data for the created enrollment.
   */
  "data": OnPremManagementServiceCreateEnrollmentResponseData;

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
      type: "OnPremManagementServiceCreateEnrollmentResponseData",
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
    return OnPremManagementServiceCreateEnrollmentResponse.attributeTypeMap;
  }

  public constructor() {}
}
