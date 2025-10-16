/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationSecurityPolicyType } from "./ApplicationSecurityPolicyType";
import { ApplicationSecurityPolicyUpdateAttributes } from "./ApplicationSecurityPolicyUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for a single WAF policy.
 */
export class ApplicationSecurityPolicyUpdateData {
  /**
   * Update a WAF policy.
   */
  "attributes": ApplicationSecurityPolicyUpdateAttributes;
  /**
   * The type of the resource. The value should always be `policy`.
   */
  "type": ApplicationSecurityPolicyType;

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
      type: "ApplicationSecurityPolicyUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ApplicationSecurityPolicyType",
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
    return ApplicationSecurityPolicyUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
