/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityAgentInvestigationCountsAttributes } from "./SecurityAgentInvestigationCountsAttributes";
import { SecurityAgentInvestigationCountsType } from "./SecurityAgentInvestigationCountsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Counts of completed investigations.
 */
export class SecurityAgentInvestigationCountsData {
  /**
   * The counts of each value of the field.
   */
  "attributes": SecurityAgentInvestigationCountsAttributes;
  /**
   * The counted field.
   */
  "id": string;
  /**
   * Type of the investigation counts resource.
   */
  "type": SecurityAgentInvestigationCountsType;

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
      type: "SecurityAgentInvestigationCountsAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityAgentInvestigationCountsType",
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
    return SecurityAgentInvestigationCountsData.attributeTypeMap;
  }

  public constructor() {}
}
