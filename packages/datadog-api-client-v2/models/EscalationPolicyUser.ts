/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationPolicyUserAttributes } from "./EscalationPolicyUserAttributes";
import { EscalationPolicyUserType } from "./EscalationPolicyUserType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Represents a user object in the context of an escalation policy, including their `id`, type, and basic attributes.
 */
export class EscalationPolicyUser {
  /**
   * Provides basic user information for an escalation policy, including a name and email address.
   */
  "attributes"?: EscalationPolicyUserAttributes;
  /**
   * The unique user identifier.
   */
  "id"?: string;
  /**
   * Users resource type.
   */
  "type": EscalationPolicyUserType;

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
      type: "EscalationPolicyUserAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "EscalationPolicyUserType",
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
    return EscalationPolicyUser.attributeTypeMap;
  }

  public constructor() {}
}
