/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityAgentInvestigationAttributes } from "./SecurityAgentInvestigationAttributes";
import { SecurityAgentInvestigationType } from "./SecurityAgentInvestigationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An investigation and its content. `attributes` is absent when `fields[investigations]` is empty or lists
 * only attributes the investigation doesn't have.
 */
export class SecurityAgentInvestigationData {
  /**
   * Attributes of an investigation. When `fields[investigations]` is set, only listed attributes are returned.
   * Attributes the investigation doesn't have yet are absent.
   */
  "attributes"?: SecurityAgentInvestigationAttributes;
  /**
   * The ID of the investigation.
   */
  "id": string;
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
      type: "SecurityAgentInvestigationAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
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
    return SecurityAgentInvestigationData.attributeTypeMap;
  }

  public constructor() {}
}
