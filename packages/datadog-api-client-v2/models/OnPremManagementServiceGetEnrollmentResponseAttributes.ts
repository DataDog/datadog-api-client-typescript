/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnPremManagementServiceGetEnrollmentResponseAttributesStatus } from "./OnPremManagementServiceGetEnrollmentResponseAttributesStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for the enrollment status.
 */
export class OnPremManagementServiceGetEnrollmentResponseAttributes {
  /**
   * The reason for enrollment failure, if applicable.
   */
  "failureReason": string;
  /**
   * The runner identifier, if enrollment was successful.
   */
  "runnerId": string;
  /**
   * The status of the enrollment.
   */
  "status": OnPremManagementServiceGetEnrollmentResponseAttributesStatus;

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
    failureReason: {
      baseName: "failure_reason",
      type: "string",
      required: true,
    },
    runnerId: {
      baseName: "runner_id",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "OnPremManagementServiceGetEnrollmentResponseAttributesStatus",
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
    return OnPremManagementServiceGetEnrollmentResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
