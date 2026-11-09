/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatusPageEmailAccessPolicyData } from "./StatusPageEmailAccessPolicyData";
import { StatusPageEmailAccessPolicyIncluded } from "./StatusPageEmailAccessPolicyIncluded";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object for a list of status page email access policies.
 */
export class StatusPageEmailAccessPolicyArrayResponse {
  /**
   * A list of status page email access policy data objects.
   */
  "data": Array<StatusPageEmailAccessPolicyData>;
  /**
   * Resources related to the email access policies, when requested using the `include` query parameter.
   */
  "included"?: Array<StatusPageEmailAccessPolicyIncluded>;

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
      type: "Array<StatusPageEmailAccessPolicyData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<StatusPageEmailAccessPolicyIncluded>",
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
    return StatusPageEmailAccessPolicyArrayResponse.attributeTypeMap;
  }

  public constructor() {}
}
