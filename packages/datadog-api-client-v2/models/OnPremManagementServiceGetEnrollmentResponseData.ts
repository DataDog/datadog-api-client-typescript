/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnPremManagementServiceGetEnrollmentResponseAttributes } from "./OnPremManagementServiceGetEnrollmentResponseAttributes";
import { OnPremManagementServiceGetEnrollmentResponseType } from "./OnPremManagementServiceGetEnrollmentResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for the enrollment status.
 */
export class OnPremManagementServiceGetEnrollmentResponseData {
  /**
   * Attributes for the enrollment status.
   */
  "attributes": OnPremManagementServiceGetEnrollmentResponseAttributes;
  /**
   * The token hash identifier.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be getEnrollmentResponse.
   */
  "type": OnPremManagementServiceGetEnrollmentResponseType;

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
    attributes: {
      baseName: "attributes",
      type: "OnPremManagementServiceGetEnrollmentResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OnPremManagementServiceGetEnrollmentResponseType",
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
    return OnPremManagementServiceGetEnrollmentResponseData.attributeTypeMap;
  }

  public constructor() {}
}
