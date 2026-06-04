/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomerOrgDisableStatus } from "./CustomerOrgDisableStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes describing the outcome of the disable action on the customer organization.
 */
export class CustomerOrgDisableResponseAttributes {
  /**
   * Resulting lifecycle status of the organization after the disable action.
   */
  "status": CustomerOrgDisableStatus;

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
    status: {
      baseName: "status",
      type: "CustomerOrgDisableStatus",
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
    return CustomerOrgDisableResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
