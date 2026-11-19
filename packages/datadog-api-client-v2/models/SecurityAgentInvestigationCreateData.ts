/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityAgentInvestigationCreateAttributes } from "./SecurityAgentInvestigationCreateAttributes";
import { SecurityAgentInvestigationType } from "./SecurityAgentInvestigationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The investigation to start.
 */
export class SecurityAgentInvestigationCreateData {
  /**
   * Attributes of the investigation to start.
   */
  "attributes": SecurityAgentInvestigationCreateAttributes;
  /**
   * Type of the investigation resource.
   */
  "type": SecurityAgentInvestigationType;

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
      type: "SecurityAgentInvestigationCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityAgentInvestigationType",
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
    return SecurityAgentInvestigationCreateData.attributeTypeMap;
  }

  public constructor() {}
}
