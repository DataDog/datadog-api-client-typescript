/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetInvestigationResponseData } from "./GetInvestigationResponseData";
import { GetInvestigationResponseLinks } from "./GetInvestigationResponseLinks";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response for a single Bits AI investigation.
 */
export class GetInvestigationResponse {
  /**
   * Data for the get investigation response.
   */
  "data": GetInvestigationResponseData;
  /**
   * Links related to the investigation.
   */
  "links": GetInvestigationResponseLinks;

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
      type: "GetInvestigationResponseData",
      required: true,
    },
    links: {
      baseName: "links",
      type: "GetInvestigationResponseLinks",
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
    return GetInvestigationResponse.attributeTypeMap;
  }

  public constructor() {}
}
