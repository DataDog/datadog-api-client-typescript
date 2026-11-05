/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityAgentInvestigationListItem } from "./SecurityAgentInvestigationListItem";
import { SecurityAgentInvestigationsListMeta } from "./SecurityAgentInvestigationsListMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A page of investigations.
 */
export class SecurityAgentInvestigationsListResponse {
  /**
   * The investigations on this page.
   */
  "data": Array<SecurityAgentInvestigationListItem>;
  /**
   * Metadata of a page of investigations.
   */
  "meta": SecurityAgentInvestigationsListMeta;

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
      type: "Array<SecurityAgentInvestigationListItem>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SecurityAgentInvestigationsListMeta",
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
    return SecurityAgentInvestigationsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
