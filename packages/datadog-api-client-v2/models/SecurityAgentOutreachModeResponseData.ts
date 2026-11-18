/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityAgentOutreachModeAttributes } from "./SecurityAgentOutreachModeAttributes";
import { SecurityAgentOutreachPolicyType } from "./SecurityAgentOutreachPolicyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The organization's outreach mode.
 */
export class SecurityAgentOutreachModeResponseData {
  /**
   * Attributes of a mode-only policy update.
   */
  "attributes": SecurityAgentOutreachModeAttributes;
  /**
   * The organization ID.
   */
  "id": string;
  /**
   * Type of the outreach policy resource.
   */
  "type": SecurityAgentOutreachPolicyType;

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
      type: "SecurityAgentOutreachModeAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityAgentOutreachPolicyType",
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
    return SecurityAgentOutreachModeResponseData.attributeTypeMap;
  }

  public constructor() {}
}
